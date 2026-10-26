# QR Menü Demo Şablonu (koyu, premium)

Kafe ve restoranlar için 4 dilli (TR / EN / DE / RU), telefona uygun QR menü sitesi. Build gerektirmez: sadece HTML, CSS ve JS dosyalarından oluşur.

Neler var:
- Gece mavisi zemin, pirinç rengi vurgu, ortalı başlık
- Yapışkan kategori sekmeleri ve menüde arama
- Her ürünün yanında küçük fotoğraf alanı. Ürüne dokununca büyük fotoğraflı detay penceresi açılır.
- Altta WhatsApp, Instagram ve Wi-Fi şifresi (kopyalama butonlu)
- WhatsApp'a sipariş sepeti: ürünlerde "+" butonu, adet ayarı, masa numarası ve not, hazır mesajla gönderme
- Alerjen filtresi ve ürün detayında alerjen rozetleri (4 dilde)
- Gündüz / gece teması (seçim hatırlanır)

## Dosyalar

| Dosya | Görevi |
|---|---|
| `index.html` | Sayfa iskeleti |
| `style.css` | Tasarım (renkler en üstteki `:root` bölümünde) |
| `app.js` | Dil seçici, sekmeler, arama, detay penceresi |
| `menu-data.js` | **Menü içeriği. Müşteri için sadece bunu düzenlersin.** |
| `img/` | Yemek ve kapak fotoğrafları buraya |
| `make_qr.py` | QR kod üretici (PNG + SVG) |

## Sipariş sepeti, alerjen ve tema

- **Sepet:** `menu-data.js` içinde `info.ordering: true` ve `info.whatsapp` doluysa çıkar. Müşteri "+" ile ürün ekler, alttaki çubuktan sepeti açar, masa numarası ve not yazıp **WhatsApp ile siparişi gönder** der. Mesaj işletme personeli okuyacağı için her zaman Türkçe hazırlanır. Sepet tarayıcıda saklanır, sayfa yenilense de kaybolmaz. Sipariş gerçekten işletmeye ancak müşteri WhatsApp'ta "gönder" tuşuna basınca ulaşır; panel veya sipariş kaydı yoktur.
- **Alerjen:** Ürüne `al: ["gluten", "dairy"]` gibi bir liste ekle (seçenekler: `gluten`, `dairy`, `egg`, `nuts`, `fish`, `shellfish`, `sesame`). Menünün üstündeki **Alerjen filtresi** seçilen alerjeni içeren ürünleri gizler. `al: []` "bilinen alerjen yok" demektir. Alan hiç yazılmazsa o ürün filtreden etkilenmez ve detayında alerjen bölümü görünmez. Demodaki değerler örnektir, gerçek menüde mutfakla kontrol et.
- **Tema:** Sağ üstteki düğme gündüz / gece temasını değiştirir. Renkler `style.css` içindeki `:root` ve `:root[data-theme="light"]` bölümlerindedir.

## 1. Bilgisayarda önizleme

1. Klasörü zip'ten çıkar.
2. `index.html` dosyasına çift tıkla, tarayıcıda açılır.
3. Telefon görünümü için tarayıcıda F12 tuşuna bas ve telefon simgesine tıkla.
4. Adresin sonuna `?lang=de` yazarak dili zorlayabilirsin.

## 2. Bir müşteri için özelleştirme

1. `menu-data.js` dosyasını bir metin düzenleyicide aç.
2. `info` bölümünde şunları değiştir:
   - `name`: işletme adı
   - `tagline`: dört dildeki kısa slogan
   - `whatsapp`: ülke kodlu numara, boşluksuz (örn. `905551112233`)
   - `instagram`: kullanıcı adı, @ olmadan
   - `review`: Google yorum linki (boş bırakırsan buton gizlenir)
   - `wifi`: ağ adı ve şifre (`name` boşsa kutu gizlenir)
   - `credit`: en alttaki küçük imza satırı (örn. `Hazırlayan: Eren.ai`). Boş bırakırsan görünmez.
3. `categories` bölümünde müşterinin gerçek yemeklerini ve fiyatlarını gir. Her ürün için dört dilde ad ve açıklama gerekir. Çevirileri müşteriye göstermeden önce bir kez gözden geçir.
4. Teslimden önce `demo: true` satırını `demo: false` yap, yoksa üstte "DEMO" şeridi görünür.
5. Renkleri müşterinin markasına uydurmak istersen `style.css` içindeki `:root` bölümünü değiştir (özellikle `--brass` vurgu rengi).

## 3. Fotoğraf ekleme

Demodaki görseller örnek çizimdir (`img/*.svg`), gerçek fotoğraf değildir. Gerçek müşteri menüsünde bunları müşterinin kendi fotoğraflarıyla değiştir.

1. Müşterinin yemek fotoğraflarını `img/` klasörüne koy (kare veya 4:3, 800 piksel genişlik, JPG).
2. `menu-data.js` içinde ilgili ürünün `img: "img/serpme.svg"` satırını kendi dosya adınla değiştir (örn. `img: "img/menemen.jpg"`). Kullanmadığın çizimleri `img/` klasöründen silebilirsin.
3. Mekan fotoğrafı istersen `info` bölümündeki `cover` alanına yolunu yaz (örn. `img/kapak.jpg`).
4. Fotoğrafı olmayan ürünlerde boş halka desenli bir alan görünür. Hiç fotoğraf kullanmayacaksan `placeholders: false` yap.

## 4. Yayınlama (Cloudflare Pages)

1. Cloudflare panelinde **Workers & Pages** bölümüne gir, **Create** ardından **Pages** seç.
2. **Upload assets** (doğrudan yükleme) seçeneğini seç.
3. Proje adı ver (bu isim adresin parçası olur, örn. `tamara-menu`).
4. Klasörün içindeki dosyaları (img klasörü dahil) yükleyip **Deploy** de.
5. Yayın adresi `https://proje-adi.pages.dev` biçiminde çıkar.
6. Menüyü güncelleyeceğin zaman aynı projede yeni bir deployment yükle.

Arayüz zamanla değişebilir. Adımlar farklı görünürse "Pages" ve "Direct Upload" ifadelerini ara.

## 5. QR kod üretme

```
pip install "qrcode[pil]"
python make_qr.py https://proje-adi.pages.dev -o tamara-qr
```

- `tamara-qr.png`: WhatsApp'tan göstermek için
- `tamara-qr.svg`: masa standı veya sticker baskısı için (istediğin boyuta büyütülebilir)

Baskıdan önce telefonunla taratıp doğru sayfanın açıldığını kontrol et. Basılı QR en az 3 x 3 cm olmalı.

## Notlar

- Fiyatlar ve yemekler örnek veridir, gerçek bir işletmeye ait değildir.
- Yazı tipleri Google Fonts'tan yüklenir. İnternet yoksa sistem yazı tipine döner, sayfa yine çalışır.
- Menü her zaman koyu temada açılır.
