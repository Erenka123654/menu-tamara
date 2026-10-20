#!/usr/bin/env python3
"""Menü adresi için QR kod üretir (PNG + SVG).

Kullanım:
    pip install "qrcode[pil]"
    python make_qr.py https://menu.ornek.pages.dev
    python make_qr.py https://menu.ornek.pages.dev -o tamara-garden

Çıktı: <isim>.png (paylaşmak için) ve <isim>.svg (baskı için, istenen boyuta büyütülebilir).
"""
import argparse
import sys

try:
    import qrcode
    import qrcode.image.svg
except ImportError:
    sys.exit('qrcode kütüphanesi yok. Önce şunu çalıştır: pip install "qrcode[pil]"')


def main():
    parser = argparse.ArgumentParser(description="Menü linki için QR kod üretir.")
    parser.add_argument("url", help="Menünün yayın adresi (https:// ile başlayan)")
    parser.add_argument("-o", "--out", default="qr-menu", help="Çıktı dosya adı (uzantısız)")
    args = parser.parse_args()

    if not args.url.startswith(("http://", "https://")):
        sys.exit("Adres http:// veya https:// ile başlamalı.")

    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_Q, box_size=20, border=4)
    qr.add_data(args.url)
    qr.make(fit=True)

    qr.make_image(fill_color="black", back_color="white").save(args.out + ".png")
    qr.make_image(image_factory=qrcode.image.svg.SvgPathImage).save(args.out + ".svg")
    print(f"Hazır: {args.out}.png ve {args.out}.svg")


if __name__ == "__main__":
    main()
