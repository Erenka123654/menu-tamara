#!/usr/bin/env python3
"""Menü adresi için QR kod üretir (PNG + SVG). İstersen her masa için ayrı QR da üretir.

Tek QR (tüm menü için):
    pip install "qrcode[pil]"
    python make_qr.py https://menu.ornek.pages.dev
    python make_qr.py https://menu.ornek.pages.dev -o tamara-garden

Masa QR'ları (her masaya ayrı, adrese ?masa=N eklenir):
    python make_qr.py https://menu.ornek.pages.dev --masalar 12
    python make_qr.py https://menu.ornek.pages.dev --masalar 12 --ad "Demo Restoran" -o qr-masalar

Çıktı (tek QR): <isim>.png ve <isim>.svg
Çıktı (masalar): <isim>/ klasörü içinde masa-1.png, masa-1.svg ... ve yazdırılabilir masalar.html
                 (masalar.html dosyasını tarayıcıda açıp yazdır: A4, sayfada 6 masa)
"""
import argparse
import base64
import html
import os
import sys
from urllib.parse import parse_qsl, urlencode, urlparse, urlunparse

try:
    import qrcode
    import qrcode.image.svg
except ImportError:
    sys.exit('qrcode kütüphanesi yok. Önce şunu çalıştır: pip install "qrcode[pil]"')


def make_qr(data):
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_Q, box_size=20, border=4)
    qr.add_data(data)
    qr.make(fit=True)
    return qr


def save_pair(data, base):
    qr = make_qr(data)
    qr.make_image(fill_color="black", back_color="white").save(base + ".png")
    qr.make_image(image_factory=qrcode.image.svg.SvgPathImage).save(base + ".svg")


def table_url(url, masa):
    """Adrese masa parametresini ekler; adreste zaten ?masa= varsa değiştirir."""
    p = urlparse(url)
    q = [(k, v) for k, v in parse_qsl(p.query, keep_blank_values=True) if k != "masa"]
    q.append(("masa", str(masa)))
    return urlunparse(p._replace(query=urlencode(q)))


def svg_data_uri(data):
    svg = make_qr(data).make_image(image_factory=qrcode.image.svg.SvgPathImage).to_string()
    return "data:image/svg+xml;base64," + base64.b64encode(svg).decode("ascii")


SHEET = """<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<title>Masa QR kodları</title>
<style>
  @page {{ size: A4; margin: 12mm; }}
  * {{ box-sizing: border-box; }}
  body {{ margin: 0; font-family: system-ui, -apple-system, "Segoe UI", sans-serif; color: #111; }}
  .grid {{ display: grid; grid-template-columns: 1fr 1fr; gap: 8mm; }}
  .card {{
    break-inside: avoid; border: 1px dashed #999; border-radius: 6mm;
    padding: 8mm 6mm; text-align: center; height: 86mm;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
  }}
  .biz {{ font-size: 13pt; font-weight: 600; margin: 0 0 2mm; }}
  .masa {{ font-size: 26pt; font-weight: 700; margin: 0 0 3mm; }}
  img {{ width: 46mm; height: 46mm; }}
  .how {{ font-size: 9.5pt; margin: 3mm 0 0; color: #333; line-height: 1.35; }}
  @media screen {{ body {{ padding: 12mm; background: #eee; }} .card {{ background: #fff; }} }}
</style>
</head>
<body>
<div class="grid">
{cards}</div>
</body>
</html>
"""

CARD = """<div class="card">
{biz}  <p class="masa">Masa {masa}</p>
  <img src="{src}" alt="Masa {masa} QR kodu">
  <p class="how">Menü ve sipariş için telefon kameranızla okutun<br>Scan with your phone camera for the menu</p>
</div>
"""


def main():
    parser = argparse.ArgumentParser(description="Menü linki için QR kod üretir.")
    parser.add_argument("url", help="Menünün yayın adresi (https:// ile başlayan)")
    parser.add_argument("-o", "--out", default=None, help="Çıktı adı (tek QR: dosya adı, masalar: klasör adı; uzantısız)")
    parser.add_argument("--masalar", type=int, metavar="N", help="1'den N'ye kadar her masa için ayrı QR üret")
    parser.add_argument("--ad", default="", help="Masa kartlarında görünecek işletme adı (isteğe bağlı)")
    args = parser.parse_args()

    if not args.url.startswith(("http://", "https://")):
        sys.exit("Adres http:// veya https:// ile başlamalı.")

    if args.masalar is None:
        out = args.out or "qr-menu"
        save_pair(args.url, out)
        print(f"Hazır: {out}.png ve {out}.svg")
        return

    if not 1 <= args.masalar <= 200:
        sys.exit("--masalar 1 ile 200 arasında olmalı.")

    folder = args.out or "qr-masalar"
    os.makedirs(folder, exist_ok=True)
    cards = []
    biz = f'  <p class="biz">{html.escape(args.ad)}</p>\n' if args.ad else ""
    for n in range(1, args.masalar + 1):
        url = table_url(args.url, n)
        save_pair(url, os.path.join(folder, f"masa-{n}"))
        cards.append(CARD.format(biz=biz, masa=n, src=svg_data_uri(url)))

    with open(os.path.join(folder, "masalar.html"), "w", encoding="utf-8") as f:
        f.write(SHEET.format(cards="".join(cards)))
    print(f"Hazır: {folder}/ klasöründe {args.masalar} masa için PNG + SVG ve yazdırılabilir masalar.html")


if __name__ == "__main__":
    main()
