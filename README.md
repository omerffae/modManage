# modManage

Kapsamlı bir ürün yönetim uygulaması. Kullanıcılar ürün ekleyebilir, silebilir, güncelleyebilir ve ürünler üzerinde arama & sıralama işlemleri yapabilir. Modern React ve Redux mimarisiyle geliştirilmiş, şık bir arayüze sahip, ölçeklenebilir bir projedir.

## Özellikler

- **Ürün Ekleme:** Modal üzerinden yeni ürün ekleyebilirsiniz.
- **Ürün Güncelleme:** Mevcut ürünleri güncelleyebilirsiniz.
- **Ürün Silme:** Ürün kartı üzerinden ürünleri silebilirsiniz.
- **Arama:** Ürünler arasında anlık arama yapabilirsiniz.
- **Sıralama:** Fiyatlara göre artan/azalan sıralama yapabilirsiniz.
- **Görsel Yükleme:** Ürünlere resim ekleyebilirsiniz.
- **Modern Arayüz:** Tailwind CSS ile responsive ve modern tasarım.

## Kullanılan Teknolojiler

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Kurulum

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/omerffae/modManage.git
   cd modManage
   ```
2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```
3. **Projeyi başlatın:**
   ```bash
   npm start
   ```

## Klasör Yapısı

```
modManage/
├── public/           # Statik dosyalar
├── src/
│   ├── components/   # UI bileşenleri (Button, Header, Input, Modal, ProductCard)
│   ├── pages/        # Sayfa bileşenleri (Product)
│   ├── redux/        # State yönetimi (dataSlice, modalSlice, store)
│   ├── App.js        # Ana uygulama
│   ├── index.js      # Giriş noktası
│   └── index.css     # Tailwind ve temel stiller
├── package.json      # Bağımlılıklar ve scriptler
├── tailwind.config.js# Tailwind yapılandırması
└── README.md         # Proje dokümantasyonu
```

## Kullanım

- **Ürün eklemek için:** Sağ üstteki artı ikonuna tıklayın, açılan modalda ürün bilgilerini girin ve kaydedin.
- **Ürün güncellemek için:** Ürün kartındaki üç noktaya tıklayın, "Güncelle" seçeneğini seçin.
- **Ürün silmek için:** Ürün kartındaki üç noktaya tıklayın, "Sil" seçeneğini seçin.
- **Arama yapmak için:** Üstteki arama kutusunu kullanın.
- **Sıralama yapmak için:** Sıralama menüsünden artan/azalan seçin.

## Ekran Görüntüsü

![Proje Görseli](/public/modManage.gif)  

## Katkı Sağlama

Katkıda bulunmak isterseniz, lütfen bir fork oluşturun ve pull request gönderin.
