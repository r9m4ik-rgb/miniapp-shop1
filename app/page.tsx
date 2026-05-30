"use client";
import { useState, useEffect } from "react";
import { House, ShoppingBag, ShoppingCart, User, X, ChevronLeft } from "lucide-react";

declare global {
  interface Window {
    Telegram: any;
  }
}

import { products, categories } from "./products";

// Заглушки описаний по подкатегориям
const descriptions: Record<string, string> = {
  "Телефоны": "Смартфон с передовыми технологиями, мощным процессором и профессиональной камерой. Идеален для работы, творчества и развлечений.",
  "Планшеты": "Планшет с большим дисплеем и долгим временем работы от аккумулятора. Отлично подходит для учёбы, рисования и просмотра контента.",
  "Компьютеры": "Производительный компьютер для профессиональных задач: монтаж видео, разработка, дизайн и многое другое.",
  "Часы": "Умные часы с отслеживанием активности, пульса и уведомлениями. Стильный аксессуар на каждый день.",
  "Наушники": "Беспроводные наушники с активным шумоподавлением и кристально чистым звуком. Идеальны для музыки и звонков.",
  "Аксессуары": "Оригинальный аксессуар, разработанный специально для устройств Apple. Высокое качество и точная совместимость.",
  "Фены": "Профессиональный фен с интеллектуальным контролем температуры. Защищает волосы от перегрева и дарит блеск.",
  "Выпрямители": "Выпрямитель с технологией Coanda — выпрямляет и сушит волосы одновременно без экстремального жара.",
  "Стайлер": "Многофункциональный стайлер для завивки, выпрямления и укладки волос. Всё в одном устройстве.",
  "Пылесосы": "Беспроводной пылесос с мощной фильтрацией. Убирает пыль, аллергены и мусор с любых поверхностей.",
  "PlayStation": "Игровая консоль нового поколения с потрясающей графикой и огромной библиотекой эксклюзивных игр.",
  "Xbox": "Игровая приставка с доступом к Game Pass и кросс-платформенной игрой с ПК.",
  "Nintendo": "Культовая игровая консоль — играй дома на большом экране или в дороге в портативном режиме.",
  "Asus ROG": "Портативная игровая консоль на Windows. Запускай любые PC-игры где угодно.",
  "Яндекс": "Умная колонка с голосовым помощником Алиса. Музыка, новости, умный дом — всё голосом.",
  "JBL": "Портативная Bluetooth-колонка с мощным звуком и защитой от воды. Бери с собой куда угодно.",
  "Canon": "Компактная камера для блогеров и путешественников с отличной автофокусировкой и записью 4K видео.",
  "Fujifilm": "Фотокамера мгновенной печати в стильном ретро-дизайне. Печатай снимки прямо на месте.",
  "Камеры DJI": "Экшн-камера с отличной стабилизацией и защитой от воды. Снимай приключения в любых условиях.",
  "Insta360": "360-градусная камера для захвата всего вокруг. Идеальна для путешествий и активного отдыха.",
  "Диктофоны": "Умный диктофон с ИИ-транскрибацией. Записывает и расшифровывает речь в реальном времени.",
  "Аксессуары DJI": "Оригинальный аксессуар DJI для расширения возможностей вашей камеры или дрона.",
  "Стабилизаторы DJI": "Профессиональный стабилизатор для съёмки плавного видео с телефона или камеры.",
};

const getDescription = (subcategory: string) =>
  descriptions[subcategory] || "Высококачественный продукт от ведущего производителя. Уточняйте характеристики у менеджера.";

// Заглушка изображения по категории
const placeholderImages: Record<string, string> = {
  apple: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  samsung: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  dyson: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Dyson_logo.svg",
  gaming: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Playstation_logo_colour.svg",
  audio: "https://upload.wikimedia.org/wikipedia/commons/0/0e/JBL_logo.svg",
  cameras: "https://upload.wikimedia.org/wikipedia/commons/0/04/Canon_logo.svg",
  dji: "https://upload.wikimedia.org/wikipedia/commons/a/a1/DJI_Logo.svg",
  plaud: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
};

const getImage = (product: any) =>
  product.image || placeholderImages[product.category] || "";

export default function Home() {

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
      if (tg.disableVerticalSwipes) tg.disableVerticalSwipes();
    }
  }, []);

  const [cart, setCart] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const banners = [
    { id: 1, image: "/banners/BU.png" },
    { id: 2, image: "/banners/Vikup.png" },
    { id: 3, image: "/banners/New.png" },
    { id: 4, image: "/banners/Trade.png" },
  ];

  const isInCart = (title: string) => cart.includes(title);

  return (
    <main
      className="min-h-screen bg-[#fffdf9] px-5 pt-[110px]"
      style={{ paddingBottom: "180px" }}
    >

      {/* Search Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-5 pt-4">
        <div className="bg-[rgba(255,253,249,0.85)] backdrop-blur-2xl rounded-3xl p-3 shadow-sm">
          <input
            type="text"
            placeholder="Поиск техники..."
            className="w-full bg-transparent text-lg outline-none"
          />
        </div>
      </div>

      {/* Home Tab */}
      {activeTab === "home" && (
        <div className="space-y-10">

          {/* Banner Slider */}
          <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar">
            {banners.map((banner) => (
              <div key={banner.id} className="w-full bg-white rounded-[32px] overflow-hidden flex-shrink-0">
                <img src={banner.image} className="w-full h-auto max-h-[220px] object-contain" />
              </div>
            ))}
          </div>

          {/* Hits */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Хиты продаж</h2>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {products.slice(0, 10).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedProduct(item)}
                  className="min-w-[200px] max-w-[200px] bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer active:scale-95 transition"
                >
                  <div className="bg-[#f7f3eb] h-[140px] flex items-center justify-center p-4">
                    <img src={getImage(item)} alt={item.title} className="h-full w-full object-contain" />
                  </div>
                  <div className="p-4">
                    <h2 className="text-sm font-semibold leading-tight">{item.title}</h2>
                    <p className="text-gray-400 text-xs mt-1">{item.price || "Уточняйте цену"}</p>
                    <button
                      onClick={(e) => { e.stopPropagation(); setCart([...cart, item.title]); }}
                      className="w-full mt-3 bg-[#f7eeeb] text-black py-2 rounded-2xl text-sm"
                    >
                      {isInCart(item.title) ? "В корзине ✓" : "Купить"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Products */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Новинки</h2>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {products.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedProduct(item)}
                  className="min-w-[200px] max-w-[200px] bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer active:scale-95 transition"
                >
                  <div className="bg-[#f7f3eb] h-[140px] flex items-center justify-center p-4">
                    <img src={getImage(item)} alt={item.title} className="h-full w-full object-contain" />
                  </div>
                  <div className="p-4">
                    <h2 className="text-sm font-semibold leading-tight">{item.title}</h2>
                    <p className="text-gray-400 text-xs mt-1">{item.price || "Уточняйте цену"}</p>
                    <button
                      onClick={(e) => { e.stopPropagation(); setCart([...cart, item.title]); }}
                      className="w-full mt-3 bg-[#f7eeeb] text-black py-2 rounded-2xl text-sm"
                    >
                      {isInCart(item.title) ? "В корзине ✓" : "Купить"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Catalog Tab */}
      {activeTab === "catalog" && (
        <div className="mb-32">
          <h2 className="text-3xl font-bold mb-6">Каталог</h2>

          {!selectedCategory && (
            <div className="grid grid-cols-3 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="w-full aspect-square bg-white rounded-3xl p-4 shadow-sm active:scale-95 transition flex flex-col items-center justify-center gap-2"
                >
                  <img src={category.image} alt={category.name} className="w-14 h-14 object-contain" />
                  <span className="text-xs font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          )}

          {selectedCategory && (
            <div>
              <button
                onClick={() => setSelectedCategory("")}
                className="mb-5 flex items-center gap-1 text-black active:scale-95 transition"
              >
                <ChevronLeft size={20} /> Назад
              </button>

              <div className="grid gap-4">
                {products
                  .filter((p) => p.category === selectedCategory)
                  .map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedProduct(item)}
                      className="bg-white rounded-3xl overflow-hidden shadow-sm flex items-center gap-4 p-4 cursor-pointer active:scale-[0.98] transition"
                    >
                      <div className="bg-[#f7f3eb] rounded-2xl w-20 h-20 flex-shrink-0 flex items-center justify-center p-2">
                        <img src={getImage(item)} alt={item.title} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] text-gray-400">{item.subcategory}</p>
                        <h3 className="font-semibold text-sm leading-tight mt-0.5">{item.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">{item.price || "Уточняйте цену"}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Cart Tab */}
      {activeTab === "cart" && (
        <div className="mb-32 mt-6">
          <h2 className="text-2xl font-bold mb-4">Корзина</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Корзина пустая</p>
          ) : (
            <div className="space-y-3">
              {cart.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
                  <span className="font-medium">{item}</span>
                  <button onClick={() => setCart(cart.filter((_, i) => i !== index))} className="text-red-500">
                    Удалить
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Bottom Tab Bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 px-5"
        style={{ paddingBottom: "calc(20px + env(safe-area-inset-bottom))" }}
      >
        <div className="bg-[#fffdf8]/70 backdrop-blur-xl border border-white/40 rounded-[32px] shadow-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => setActiveTab("home")} className={`flex flex-col items-center gap-1 ${activeTab === "home" ? "text-black" : "text-gray-400"}`}>
              <House size={24} />
              <span className="text-xs font-medium">Главная</span>
            </button>
            <button onClick={() => setActiveTab("catalog")} className={`flex flex-col items-center gap-1 ${activeTab === "catalog" ? "text-black" : "text-gray-400"}`}>
              <ShoppingBag size={24} />
              <span className="text-xs">Каталог</span>
            </button>
            <button onClick={() => setActiveTab("cart")} className={`flex flex-col items-center gap-1 relative ${activeTab === "cart" ? "text-black" : "text-gray-400"}`}>
              <div className="relative">
                <ShoppingCart size={24} />
                {cart.length > 0 && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
                    {cart.length}
                  </div>
                )}
              </div>
              <span className="text-xs">Корзина</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400">
              <User size={24} />
              <span className="text-xs">Профиль</span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Modal (Bottom Sheet) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          />

          {/* Sheet */}
          <div className="relative bg-[#fffdf9] rounded-t-[36px] max-h-[90vh] overflow-y-auto">

            {/* Close button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 z-10 bg-black/10 rounded-full p-2"
            >
              <X size={20} />
            </button>

            {/* Image */}
            <div className="bg-[#f7f3eb] w-full h-[280px] flex items-center justify-center p-8">
              <img
                src={getImage(selectedProduct)}
                alt={selectedProduct.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{selectedProduct.subcategory}</p>
                <h1 className="text-2xl font-bold mt-1">{selectedProduct.title}</h1>
                <p className="text-xl font-semibold mt-2">{selectedProduct.price || "Уточняйте цену"}</p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {getDescription(selectedProduct.subcategory)}
              </p>

              {/* Placeholder specs */}
              <div className="bg-white rounded-2xl p-4 space-y-2">
                <h3 className="font-semibold text-sm mb-3">Характеристики</h3>
                {[
                  ["Состояние", "Новый"],
                  ["Гарантия", "1 год"],
                  ["Доставка", "1–3 дня"],
                  ["Оплата", "Наличные, карта, перевод"],
                ].map(([key, val]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-gray-400">{key}</span>
                    <span className="font-medium">{val}</span>
                  </div>
                ))}
              </div>

              {/* Add to cart */}
              <button
                onClick={() => {
                  if (!isInCart(selectedProduct.title)) {
                    setCart([...cart, selectedProduct.title]);
                  }
                  setSelectedProduct(null);
                }}
                className="w-full bg-black text-white py-4 rounded-2xl font-semibold text-base active:scale-95 transition"
              >
                {isInCart(selectedProduct.title) ? "Уже в корзине" : "Добавить в корзину"}
              </button>

            </div>
          </div>
        </div>
      )}

    </main>
  );
}
