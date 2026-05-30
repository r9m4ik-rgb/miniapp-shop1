export interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  category: string;
  subcategory: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    id: "apple",
    name: "Apple",
    image: "/banners/apple.jpg",
    subcategories: ["Телефоны", "Планшеты", "Компьютеры", "Часы", "Наушники", "Аксессуары"],
  },
  {
    id: "samsung",
    name: "Samsung",
    image: "/banners/samsung.jpg",
    subcategories: ["Телефоны"],
  },
  {
    id: "dyson",
    name: "Dyson",
    image: "/banners/dyson.jpg",
    subcategories: ["Фены", "Выпрямители", "Стайлер", "Пылесосы"],
  },
  {
    id: "gaming",
    name: "Игры",
    image: "/banners/gaming.jpg",
    subcategories: ["PlayStation", "Xbox", "Nintendo", "Asus ROG"],
  },
  {
    id: "audio",
    name: "Колонки",
    image: "/banners/audio.jpg",
    subcategories: ["Яндекс", "JBL"],
  },
  {
    id: "cameras",
    name: "Камеры",
    image: "/banners/cameras.jpg",
    subcategories: ["Canon", "Fujifilm", "DJI", "Insta360"],
  },
  {
    id: "dji",
    name: "DJI",
    image: "/banners/dji.png",
    subcategories: ["Камеры DJI", "Аксессуары DJI", "Стабилизаторы DJI"],
  },
  {
    id: "plaud",
    name: "Plaud",
    image: "/banners/plaud.webp",
    subcategories: ["Диктофоны"],
  },
];

let idCounter = 1;
const p = (
  title: string,
  price: string,
  category: string,
  subcategory: string,
  image = ""
): Product => ({
  id: idCounter++,
  title,
  price,
  image,
  category,
  subcategory,
});

export const products: Product[] = [

  // ─── ТЕЛЕФОНЫ — iPhone ───────────────────────────────────────────────────
  p("iPhone 17 Pro Max",           "",  "apple",   "Телефоны"),
  p("iPhone 17 Pro",               "",  "apple",   "Телефоны"),
  p("iPhone 17",                   "",  "apple",   "Телефоны"),
  p("iPhone 17e",                  "",  "apple",   "Телефоны"),
  p("iPhone Air",                  "",  "apple",   "Телефоны"),
  p("iPhone 16 Pro Max",           "",  "apple",   "Телефоны"),
  p("iPhone 16 Pro",               "",  "apple",   "Телефоны"),
  p("iPhone 16 Plus",              "",  "apple",   "Телефоны"),
  p("iPhone 16",                   "",  "apple",   "Телефоны"),
  p("iPhone 16e",                  "",  "apple",   "Телефоны"),
  p("iPhone 15 Plus",              "",  "apple",   "Телефоны"),
  p("iPhone 15",                   "",  "apple",   "Телефоны"),
  p("iPhone 14",                   "",  "apple",   "Телефоны"),
  p("iPhone 13",                   "",  "apple",   "Телефоны"),

  // ─── ТЕЛЕФОНЫ — Samsung ──────────────────────────────────────────────────
  p("Samsung Galaxy S26 Ultra",    "",  "samsung", "Телефоны"),
  p("Samsung Galaxy S26+",         "",  "samsung", "Телефоны"),
  p("Samsung Galaxy S26",          "",  "samsung", "Телефоны"),
  p("Samsung Galaxy Z Fold 7",     "",  "samsung", "Телефоны"),
  p("Samsung Galaxy S25 Ultra",    "",  "samsung", "Телефоны"),
  p("Samsung Galaxy S25+",         "",  "samsung", "Телефоны"),
  p("Samsung Galaxy S25",          "",  "samsung", "Телефоны"),
  p("Samsung Galaxy S25 Edge",     "",  "samsung", "Телефоны"),

  // ─── ПЛАНШЕТЫ ────────────────────────────────────────────────────────────
  p("iPad Pro 11\" 2025 M5",       "",  "apple",   "Планшеты"),
  p("iPad Pro 13\" 2025 M5",       "",  "apple",   "Планшеты"),
  p("iPad Pro 11\" M4",            "",  "apple",   "Планшеты"),
  p("iPad Pro 13\" M4",            "",  "apple",   "Планшеты"),
  p("iPad Air 11\" 2026 M4",       "",  "apple",   "Планшеты"),
  p("iPad Air 13\" 2026 M4",       "",  "apple",   "Планшеты"),
  p("iPad Air 11\" 2025 M3",       "",  "apple",   "Планшеты"),
  p("iPad Air 13\" 2025 M3",       "",  "apple",   "Планшеты"),
  p("iPad 11 2025",                "",  "apple",   "Планшеты"),
  p("iPad Mini 7",                 "",  "apple",   "Планшеты"),

  // ─── КОМПЬЮТЕРЫ — MacBook Pro ────────────────────────────────────────────
  p("MacBook Pro 16\" 2026 M5 Max","",  "apple",   "Компьютеры"),
  p("MacBook Pro 16\" 2026 M5 Pro","",  "apple",   "Компьютеры"),
  p("MacBook Pro 14\" 2026 M5 Max","",  "apple",   "Компьютеры"),
  p("MacBook Pro 14\" 2026 M5 Pro","",  "apple",   "Компьютеры"),
  p("MacBook Pro 14\" 2026 M5",    "",  "apple",   "Компьютеры"),

  // ─── КОМПЬЮТЕРЫ — MacBook Air ────────────────────────────────────────────
  p("MacBook Air 15\" 2026 M5",    "",  "apple",   "Компьютеры"),
  p("MacBook Air 13\" 2026 M5",    "",  "apple",   "Компьютеры"),
  p("MacBook Air 15\" 2025 M4",    "",  "apple",   "Компьютеры"),
  p("MacBook Air 13\" 2025 M4",    "",  "apple",   "Компьютеры"),

  // ─── КОМПЬЮТЕРЫ — прочее ─────────────────────────────────────────────────
  p("MacBook Neo 2026 (A18 Pro)",  "",  "apple",   "Компьютеры"),
  p("iMac M4 2024",                "",  "apple",   "Компьютеры"),
  p("iMac M3 2023",                "",  "apple",   "Компьютеры"),
  p("Mac Mini 2024 M4",            "",  "apple",   "Компьютеры"),

  // ─── ЧАСЫ ────────────────────────────────────────────────────────────────
  p("Apple Watch Ultra 3",                   "",  "apple",  "Часы"),
  p("Apple Watch 11 42mm",                   "",  "apple",  "Часы"),
  p("Apple Watch 11 46mm",                   "",  "apple",  "Часы"),
  p("Apple Watch 11 Titanium 42mm",          "",  "apple",  "Часы"),
  p("Apple Watch 11 Titanium 46mm",          "",  "apple",  "Часы"),
  p("Apple Watch SE 3 40mm",                 "",  "apple",  "Часы"),
  p("Apple Watch SE 3 44mm",                 "",  "apple",  "Часы"),

  // ─── НАУШНИКИ ────────────────────────────────────────────────────────────
  p("AirPods Max USB-C",           "",  "apple",   "Наушники"),
  p("AirPods Pro 3",               "",  "apple",   "Наушники"),
  p("AirPods Pro 2",               "",  "apple",   "Наушники"),
  p("AirPods 4 ANC",               "",  "apple",   "Наушники"),
  p("AirPods 4",                   "",  "apple",   "Наушники"),

  // ─── АКСЕССУАРЫ Apple ────────────────────────────────────────────────────
  p("Magic Keyboard для iPad 11\"",           "",  "apple",  "Аксессуары"),
  p("Magic Keyboard для iPad 13\"",           "",  "apple",  "Аксессуары"),
  p("Apple Pencil Pro",                       "",  "apple",  "Аксессуары"),
  p("Apple Pencil USB-C",                     "",  "apple",  "Аксессуары"),
  p("Apple Pencil 2",                         "",  "apple",  "Аксессуары"),
  p("Pitaka iPhone 17 Pro Max Sunset",        "",  "apple",  "Аксессуары"),
  p("Pitaka iPhone 17 Pro Sunset",            "",  "apple",  "Аксессуары"),
  p("Pitaka iPhone 17 Pro Max Over The Horizon", "", "apple", "Аксессуары"),
  p("Pitaka iPhone 17 Pro Over The Horizon",  "",  "apple",  "Аксессуары"),
  p("Magic Mouse 3",                          "",  "apple",  "Аксессуары"),
  p("Magic Trackpad",                         "",  "apple",  "Аксессуары"),
  p("Magic Keyboard",                         "",  "apple",  "Аксессуары"),

  // ─── DYSON — Фены ────────────────────────────────────────────────────────
  p("Dyson Supersonic HD18",       "",  "dyson",   "Фены"),
  p("Dyson Supersonic HD17",       "",  "dyson",   "Фены"),
  p("Dyson Supersonic HD16",       "",  "dyson",   "Фены"),

  // ─── DYSON — Выпрямители ─────────────────────────────────────────────────
  p("Dyson Airstrait HT01",        "",  "dyson",   "Выпрямители"),

  // ─── DYSON — Стайлер ─────────────────────────────────────────────────────
  p("Dyson Airwrap HS08",          "",  "dyson",   "Стайлер"),
  p("Dyson Airwrap HS09",          "",  "dyson",   "Стайлер"),

  // ─── DYSON — Пылесосы ────────────────────────────────────────────────────
  p("Dyson Gen5 Detect Absolute SV23",  "",  "dyson",  "Пылесосы"),
  p("Dyson V15 SV47",                   "",  "dyson",  "Пылесосы"),
  p("Dyson V8 Absolute SV25",           "",  "dyson",  "Пылесосы"),

  // ─── ПРИСТАВКИ — PlayStation ─────────────────────────────────────────────
  p("PlayStation 5 Slim",          "",  "gaming",  "PlayStation"),
  p("PlayStation 5 Pro",           "",  "gaming",  "PlayStation"),
  p("PlayStation Portal",          "",  "gaming",  "PlayStation"),
  p("Геймпад DualSense",           "",  "gaming",  "PlayStation"),

  // ─── ПРИСТАВКИ — Asus ROG ────────────────────────────────────────────────
  p("Asus ROG Ally Xbox",          "",  "gaming",  "Asus ROG"),
  p("Asus ROG Ally X",             "",  "gaming",  "Asus ROG"),

  // ─── ПРИСТАВКИ — Xbox ────────────────────────────────────────────────────
  p("Xbox Series X",               "",  "gaming",  "Xbox"),
  p("Xbox Series S",               "",  "gaming",  "Xbox"),
  p("Steam Deck OLED",             "",  "gaming",  "Xbox"),

  // ─── ПРИСТАВКИ — Nintendo ────────────────────────────────────────────────
  p("Nintendo Switch 2",           "",  "gaming",  "Nintendo"),
  p("Nintendo Switch Lite",        "",  "gaming",  "Nintendo"),
  p("Nintendo Switch OLED",        "",  "gaming",  "Nintendo"),

  // ─── КОЛОНКИ — Яндекс ────────────────────────────────────────────────────
  p("Яндекс Станция 3",            "",  "audio",   "Яндекс"),
  p("Яндекс Дуо Макс",             "",  "audio",   "Яндекс"),
  p("Яндекс Станция Мини 3 Про",   "",  "audio",   "Яндекс"),
  p("Яндекс Станция Мини 3",       "",  "audio",   "Яндекс"),
  p("Яндекс Станция Макс",         "",  "audio",   "Яндекс"),
  p("Яндекс Станция Миди",         "",  "audio",   "Яндекс"),

  // ─── КОЛОНКИ — JBL ───────────────────────────────────────────────────────
  p("JBL Flip 6",                  "",  "audio",   "JBL"),
  p("JBL Flip 7",                  "",  "audio",   "JBL"),
  p("JBL Charge 5",                "",  "audio",   "JBL"),
  p("JBL Charge 6",                "",  "audio",   "JBL"),
  p("JBL Xtreme 4",                "",  "audio",   "JBL"),
  p("JBL Boombox 4",               "",  "audio",   "JBL"),

  // ─── КАМЕРЫ — Canon ──────────────────────────────────────────────────────
  p("Canon PowerShot G7X Mark 3",  "",  "cameras", "Canon"),
  p("Canon PowerShot SX740HS",     "",  "cameras", "Canon"),

  // ─── КАМЕРЫ — Fujifilm ───────────────────────────────────────────────────
  p("Fujifilm Evo Cinema",         "",  "cameras", "Fujifilm"),
  p("Fujifilm Wide Evo",           "",  "cameras", "Fujifilm"),
  p("Fujifilm Instax Mini Evo",    "",  "cameras", "Fujifilm"),
  p("Fujifilm Instax Mini 12",     "",  "cameras", "Fujifilm"),
  p("Картриджи Instax Mini",       "",  "cameras", "Fujifilm"),
  p("Картриджи Instax Wide",       "",  "cameras", "Fujifilm"),

  // ─── КАМЕРЫ — DJI ────────────────────────────────────────────────────────
  p("DJI Osmo Pocket 3 Creator Combo",        "",  "dji",  "Камеры DJI"),
  p("DJI Osmo Pocket 3 Standard Combo",       "",  "dji",  "Камеры DJI"),
  p("DJI Osmo Action 5 Pro Adventure Combo",  "",  "dji",  "Камеры DJI"),
  p("DJI Osmo Action 5 Pro Standard Combo",   "",  "dji",  "Камеры DJI"),
  p("DJI Osmo Action 6 Adventure Combo",      "",  "dji",  "Камеры DJI"),
  p("DJI Osmo Action 6 Standard Combo",       "",  "dji",  "Камеры DJI"),

  // ─── КАМЕРЫ — Insta360 ───────────────────────────────────────────────────
  p("Insta360 X5",                 "",  "cameras", "Insta360"),

  // ─── PLAUD — Диктофоны ───────────────────────────────────────────────────
  p("Plaud Note Pro",              "",  "plaud",   "Диктофоны"),
  p("Plaud Note Pin",              "",  "plaud",   "Диктофоны"),
  p("Plaud Note",                  "",  "plaud",   "Диктофоны"),

  // ─── DJI — Аксессуары ────────────────────────────────────────────────────
  p("DJI Mic Mini (2TX+1RX+Case)",            "",  "dji",  "Аксессуары DJI"),
  p("DJI Mic 3 (2TX+1RX+Case)",               "",  "dji",  "Аксессуары DJI"),
  p("DJI Osmo Action 6 Diving Kit",           "",  "dji",  "Аксессуары DJI"),
  p("DJI Osmo Action 6 Waterproof Case",      "",  "dji",  "Аксессуары DJI"),
  p("DJI SDR Transmission Transmitter",       "",  "dji",  "Аксессуары DJI"),
  p("DJI O4 Air Unit Pro",                    "",  "dji",  "Аксессуары DJI"),
  p("DJI O4 Air Unit",                        "",  "dji",  "Аксессуары DJI"),

  // ─── DJI — Стабилизаторы ─────────────────────────────────────────────────
  p("DJI Osmo Mobile 8",           "",  "dji",  "Стабилизаторы DJI"),
  p("DJI Ronin RS5 Combo",         "",  "dji",  "Стабилизаторы DJI"),
  p("DJI Ronin RS5",               "",  "dji",  "Стабилизаторы DJI"),
  p("DJI Ronin RS4 Combo",         "",  "dji",  "Стабилизаторы DJI"),
  p("DJI Ronin RS4",               "",  "dji",  "Стабилизаторы DJI"),
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Все товары конкретной категории */
export const getByCategory = (categoryId: string) =>
  products.filter((p) => p.category === categoryId);

/** Все товары конкретной подкатегории */
export const getBySubcategory = (categoryId: string, subcategory: string) =>
  products.filter(
    (p) => p.category === categoryId && p.subcategory === subcategory
  );

/** Поиск по названию */
export const searchProducts = (query: string) => {
  const q = query.toLowerCase();
  return products.filter((p) => p.title.toLowerCase().includes(q));
};
