/*
  MENÜ VERİSİ — müşteriye göre sadece bu dosyayı düzenlersin.

  info.demo        : true ise sayfanın üstünde "DEMO" şeridi görünür. Müşteriye teslimde false yap.
  info.whatsapp    : ülke kodlu, + ve boşluksuz numara (örn. 905551112233). Boş bırakırsan buton gizlenir.
  info.instagram   : kullanıcı adı (@ olmadan). Boş bırakırsan buton gizlenir.
  info.review      : Google yorum linki. Boş bırakırsan buton gizlenir.
  info.wifi        : { name, pass }. name boşsa Wi-Fi kutusu gizlenir.
  info.cover       : Üstte arka plan olarak görünen mekan fotoğrafı (örn. "img/kapak.jpg"). Boşsa düz renk kalır.
  info.placeholders: true ise fotoğrafı olmayan ürünlerde boş halka desenli alan görünür.
                     Hiç fotoğraf kullanılmayacaksa false yap, menü sadece yazıyla çıkar.
  info.credit      : En altta küçük bir imza satırı (örn. "Hazırlayan: Eren.ai"). Boşsa görünmez.
  tags             : "p" = Çok sevilen, "v" = Vejetaryen, "s" = Acılı
  price            : sayı (TL)
  img (ürün için)  : isteğe bağlı, ürünün fotoğraf yolu. Örnek: img: "img/menemen.jpg"
                     Fotoğrafı img klasörüne koy. Kare veya 4:3 oranında, 800 piksel genişlikte yeterli.
*/
window.MENU = {
  info: {
    demo: true,
    cover: "",
    placeholders: true,
    credit: "",
    name: "Demo Restoran & Cafe",
    tagline: {
      tr: "Alanya'da taze ve ev yapımı lezzetler",
      en: "Fresh, homemade food in Alanya",
      de: "Frische Hausmannskost in Alanya",
      ru: "Свежая домашняя кухня в Аланье"
    },
    whatsapp: "905000000000",
    instagram: "demorestoran",
    review: "",
    wifi: { name: "DemoRestoran", pass: "12345678" }
  },

  categories: [
    {
      id: "breakfast",
      name: { tr: "Kahvaltı", en: "Breakfast", de: "Frühstück", ru: "Завтрак" },
      items: [
        {
          name: { tr: "Serpme Kahvaltı (2 kişilik)", en: "Turkish Breakfast Spread (for 2)", de: "Türkisches Frühstück (für 2)", ru: "Турецкий завтрак (на 2 персоны)" },
          desc: {
            tr: "Peynir çeşitleri, zeytin, domates, salatalık, bal, kaymak, yumurta ve sıcak çay",
            en: "Selection of cheeses, olives, tomato, cucumber, honey, clotted cream, eggs and hot tea",
            de: "Käseauswahl, Oliven, Tomate, Gurke, Honig, Kaymak, Eier und heißer Tee",
            ru: "Ассорти сыров, оливки, помидоры, огурцы, мёд, каймак, яйца и горячий чай"
          },
          img: "img/serpme.svg", price: 450, tags: ["p", "v"]
        },
        {
          name: { tr: "Menemen", en: "Menemen", de: "Menemen", ru: "Менемен" },
          desc: {
            tr: "Domates, biber ve yumurta, yanında ekmek",
            en: "Eggs scrambled with tomato and peppers, served with bread",
            de: "Rührei mit Tomaten und Paprika, dazu Brot",
            ru: "Яйца с помидорами и перцем, подаётся с хлебом"
          },
          img: "img/menemen.svg", price: 220, tags: ["v"]
        },
        {
          name: { tr: "Avokadolu Tost", en: "Avocado Toast", de: "Avocado-Toast", ru: "Тост с авокадо" },
          desc: {
            tr: "Ekşi mayalı ekmek, avokado ve poşe yumurta",
            en: "Sourdough, avocado and poached egg",
            de: "Sauerteigbrot, Avocado und pochiertes Ei",
            ru: "Хлеб на закваске, авокадо и яйцо пашот"
          },
          img: "img/tost.svg", price: 260, tags: ["v"]
        },
        {
          name: { tr: "Muzlu Çikolatalı Pankek", en: "Banana & Chocolate Pancakes", de: "Pfannkuchen mit Banane & Schokolade", ru: "Панкейки с бананом и шоколадом" },
          desc: {
            tr: "Üç kat pankek, taze muz ve çikolata sosu",
            en: "Stack of three pancakes with fresh banana and chocolate sauce",
            de: "Drei Pfannkuchen mit frischer Banane und Schokoladensauce",
            ru: "Три панкейка со свежим бананом и шоколадным соусом"
          },
          img: "img/pankek.svg", price: 240, tags: ["v"]
        }
      ]
    },
    {
      id: "starters",
      name: { tr: "Başlangıçlar", en: "Starters", de: "Vorspeisen", ru: "Закуски" },
      items: [
        {
          name: { tr: "Mercimek Çorbası", en: "Lentil Soup", de: "Linsensuppe", ru: "Чечевичный суп" },
          desc: {
            tr: "Geleneksel süzme kırmızı mercimek çorbası, limon ile",
            en: "Traditional strained red lentil soup with lemon",
            de: "Traditionelle Rote-Linsen-Suppe mit Zitrone",
            ru: "Традиционный суп-пюре из красной чечевицы с лимоном"
          },
          img: "img/mercimek.svg", price: 110, tags: ["v"]
        },
        {
          name: { tr: "Humus", en: "Hummus", de: "Hummus", ru: "Хумус" },
          desc: {
            tr: "Nohut ezmesi, zeytinyağı ve pul biber ile",
            en: "Chickpea dip with olive oil and chili flakes",
            de: "Kichererbsenpüree mit Olivenöl und Chiliflocken",
            ru: "Нутовая паста с оливковым маслом и хлопьями чили"
          },
          img: "img/humus.svg", price: 150, tags: ["v"]
        },
        {
          name: { tr: "Çıtır Kalamar", en: "Crispy Calamari", de: "Knusprige Calamari", ru: "Хрустящие кальмары" },
          desc: {
            tr: "Tartar sos ile servis edilir",
            en: "Served with tartar sauce",
            de: "Mit Tartarsauce serviert",
            ru: "Подаются с соусом тартар"
          },
          img: "img/kalamar.svg", price: 280, tags: ["p"]
        },
        {
          name: { tr: "Sigara Böreği", en: "Cheese Rolls (Sigara Böreği)", de: "Käse-Röllchen (Sigara Böreği)", ru: "Сигара бёрек (сырные рулетики)" },
          desc: {
            tr: "Beyaz peynirli, el açması yufka",
            en: "Feta-filled hand-rolled pastry",
            de: "Dünner Teig mit Schafskäsefüllung",
            ru: "Тонкое тесто юфка с начинкой из сыра фета"
          },
          img: "img/sigara.svg", price: 170, tags: ["v"]
        }
      ]
    },
    {
      id: "mains",
      name: { tr: "Ana Yemekler", en: "Main Courses", de: "Hauptgerichte", ru: "Основные блюда" },
      items: [
        {
          name: { tr: "Karışık Izgara", en: "Mixed Grill", de: "Gemischter Grillteller", ru: "Ассорти гриль" },
          desc: {
            tr: "Kuzu pirzola, köfte ve tavuk; pilav ve közlenmiş sebze ile",
            en: "Lamb chops, meatballs and chicken with rice and grilled vegetables",
            de: "Lammkoteletts, Frikadellen und Hähnchen mit Reis und gegrilltem Gemüse",
            ru: "Баранья отбивная, котлеты и курица с рисом и овощами гриль"
          },
          img: "img/izgara.svg", price: 520, tags: ["p"]
        },
        {
          name: { tr: "Tavuk Şiş", en: "Chicken Skewers", de: "Hähnchenspieß", ru: "Куриный шашлык" },
          desc: {
            tr: "Marine edilmiş tavuk, bulgur pilavı ve salata",
            en: "Marinated chicken with bulgur pilaf and salad",
            de: "Marinierte Hähnchenspieße mit Bulgur-Pilaw und Salat",
            ru: "Маринованная курица с булгуром и салатом"
          },
          img: "img/tavuksis.svg", price: 360, tags: []
        },
        {
          name: { tr: "Levrek Izgara", en: "Grilled Sea Bass", de: "Gegrillter Wolfsbarsch", ru: "Сибас на гриле" },
          desc: {
            tr: "Taze levrek, roka salatası ve limon ile",
            en: "Fresh sea bass with arugula salad and lemon",
            de: "Frischer Wolfsbarsch mit Rucola-Salat und Zitrone",
            ru: "Свежий сибас с салатом из руколы и лимоном"
          },
          img: "img/levrek.svg", price: 480, tags: []
        },
        {
          name: { tr: "Klasik Burger", en: "Classic Burger", de: "Klassischer Burger", ru: "Классический бургер" },
          desc: {
            tr: "Dana eti, cheddar ve patates kızartması ile",
            en: "Beef patty and cheddar, served with fries",
            de: "Rindfleisch-Patty und Cheddar, mit Pommes",
            ru: "Говяжья котлета и чеддер, подаётся с картофелем фри"
          },
          img: "img/burger.svg", price: 340, tags: ["p"]
        },
        {
          name: { tr: "Penne Arrabbiata", en: "Penne Arrabbiata", de: "Penne Arrabbiata", ru: "Пенне арраббиата" },
          desc: {
            tr: "Acılı domates sosu, sarımsak ve fesleğen",
            en: "Spicy tomato sauce, garlic and basil",
            de: "Scharfe Tomatensauce, Knoblauch und Basilikum",
            ru: "Острый томатный соус, чеснок и базилик"
          },
          img: "img/penne.svg", price: 270, tags: ["v", "s"]
        }
      ]
    },
    {
      id: "desserts",
      name: { tr: "Tatlılar", en: "Desserts", de: "Desserts", ru: "Десерты" },
      items: [
        {
          name: { tr: "Baklava (4 dilim)", en: "Baklava (4 pieces)", de: "Baklava (4 Stück)", ru: "Пахлава (4 шт.)" },
          desc: {
            tr: "Antep fıstıklı",
            en: "With pistachio",
            de: "Mit Pistazien",
            ru: "С фисташками"
          },
          img: "img/baklava.svg", price: 220, tags: ["p"]
        },
        {
          name: { tr: "Künefe", en: "Künefe", de: "Künefe", ru: "Кюнефе" },
          desc: {
            tr: "Sıcak servis edilir, dondurma ile",
            en: "Served hot with ice cream",
            de: "Heiß serviert, mit Eis",
            ru: "Подаётся горячим с мороженым"
          },
          img: "img/kunefe.svg", price: 240, tags: []
        },
        {
          name: { tr: "Fırın Sütlaç", en: "Baked Rice Pudding", de: "Gebackener Milchreis", ru: "Запечённый рисовый пудинг" },
          desc: {
            tr: "Geleneksel tarif, üzeri kızarmış",
            en: "Traditional recipe with a golden top",
            de: "Traditionelles Rezept mit goldener Kruste",
            ru: "Традиционный рецепт с золотистой корочкой"
          },
          img: "img/sutlac.svg", price: 140, tags: []
        },
        {
          name: { tr: "Dondurma (3 top)", en: "Ice Cream (3 scoops)", de: "Eis (3 Kugeln)", ru: "Мороженое (3 шарика)" },
          desc: {
            tr: "Vanilya, çikolata, çilek",
            en: "Vanilla, chocolate, strawberry",
            de: "Vanille, Schokolade, Erdbeere",
            ru: "Ваниль, шоколад, клубника"
          },
          img: "img/dondurma.svg", price: 130, tags: ["v"]
        }
      ]
    },
    {
      id: "drinks",
      name: { tr: "İçecekler", en: "Drinks", de: "Getränke", ru: "Напитки" },
      items: [
        {
          name: { tr: "Türk Kahvesi", en: "Turkish Coffee", de: "Türkischer Kaffee", ru: "Турецкий кофе" },
          desc: {
            tr: "Sade, orta veya şekerli",
            en: "Plain, medium or sweet",
            de: "Ohne Zucker, mittel oder süß",
            ru: "Без сахара, средний или сладкий"
          },
          img: "img/kahve.svg", price: 90, tags: []
        },
        {
          name: { tr: "Çay", en: "Turkish Tea", de: "Türkischer Tee", ru: "Турецкий чай" },
          desc: { tr: "", en: "", de: "", ru: "" },
          img: "img/cay.svg", price: 30, tags: []
        },
        {
          name: { tr: "Taze Portakal Suyu", en: "Fresh Orange Juice", de: "Frisch gepresster Orangensaft", ru: "Свежевыжатый апельсиновый сок" },
          desc: { tr: "", en: "", de: "", ru: "" },
          img: "img/portakal.svg", price: 120, tags: []
        },
        {
          name: { tr: "Ev Yapımı Limonata", en: "Homemade Lemonade", de: "Hausgemachte Limonade", ru: "Домашний лимонад" },
          desc: {
            tr: "Taze nane ile",
            en: "With fresh mint",
            de: "Mit frischer Minze",
            ru: "Со свежей мятой"
          },
          img: "img/limonata.svg", price: 110, tags: ["p"]
        },
        {
          name: { tr: "Ayran", en: "Ayran (yogurt drink)", de: "Ayran (Joghurtgetränk)", ru: "Айран (кисломолочный напиток)" },
          desc: { tr: "", en: "", de: "", ru: "" },
          img: "img/ayran.svg", price: 60, tags: []
        }
      ]
    }
  ]
};
