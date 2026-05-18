"use client";
import { useState } from "react";
import {
  House,
  ShoppingBag,
  ShoppingCart,
  User,
} from "lucide-react";
import ProductCard from "./componets/ProductCard";

export default function Home() {

  const [cart, setCart] = useState<string[]>([]);

  const [activeTab, setActiveTab] = useState("home");

  const [selectedCategory, setSelectedCategory] = useState("");

  const products = [
    
  {
    id: 1,
    title: "Canon G7X Mark 3 Black",
    price: "94.990₽",
    image:
      "/banners/g7x.jpg",
  },
  {
    id: 2,
    title: "MacBook Air M3",
    price: "1499€",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-13-midnight-select",
  },
  {
    id: 3,
    title: "AirPods Pro",
    price: "299€",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83",
  },
  {
    id: 4,
    title: "iPhone 15 Pro",
    price: "1299€",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-family-hero",
  },
  {
    id: 5,
    title: "Apple Watch Ultra",
    price: "799€",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQF23",
  },
  {
    id: 6,
    title: "HomePod mini",
    price: "99€",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-spacegray",
  },
];

const banners = [
  {
    id: 1,
    image:
      "/banners/BU.png",
  },

  {
    id: 2,
    image:
      "/banners/Vikup.png",
  },

  {
    id: 3,
    image:
      "/banners/New.png",
  },

  {
    id: 4,
    image:
      "/banners/Trade.png",
  },
];

const categories = [
  {
    id: 1,
    name: "Apple",
    image: "/banners/apple.jpg",
  },

  {
    id: 2,
    name: "Canon",
    image: "/banners/canon.jpg",
  },

  {
    id: 3,
    name: "DJI",
    image: "/banners/dji.png",
  },

  {
    id: 4,
    name: "Plaud",
    image: "/banners/plaud.webp",
  },
];

  return (
    <main className="min-h-screen bg-[#f5f5f7] p-5 pb-40">

<div className="sticky top-0 z-50 bg-[#f5f5f7] pb-4">
</div>

{/* Search */}

<div className="mb-6">
  <input
    type="text"
    placeholder="Поиск техники..."
    className="
      w-full
      bg-white
      rounded-2xl
      px-5
      py-4
      text-lg
      outline-none
      shadow-sm
    "
  />
</div>

{activeTab === "home" && (
  <>

{/* Banner Slider */}

<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar">

  {banners.map((banner) => (
    <div
      key={banner.id}
      className="min-w-[90%] relative rounded-[32px] overflow-hidden snap-center flex-shrink-0"
    >

      <img
        src={banner.image}
        className="w-full h-[220px] object-cover"
      />


      <div className="absolute bottom-6 left-6 text-white">

 
      </div>

    </div>
  ))}
</div>

{/* Hits */}

<div className="mb-8">

  <div className="flex items-center justify-between mb-4">
    <h2 className="text-2xl font-bold">
      Хиты продаж
    </h2>
  </div>

  <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">

    {products.map((item) => (
      <div
        key={item.id}
        className="min-w-[260px] bg-white rounded-3xl overflow-hidden shadow-sm"
      >

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[220px] object-contain p-5"
        />

        <div className="p-5">

          <h2 className="text-lg font-semibold">
            {item.title}
          </h2>

          <p className="text-gray-500 mt-2">
            {item.price}
          </p>

          <button
            onClick={() =>
              setCart([...cart, item.title])
            }
            className="w-full mt-4 bg-blue-500 text-white py-3 rounded-2xl"
          >
            Купить
          </button>

        </div>
      </div>
    ))}

  </div>
</div>

{/* New Products */}

<div className="mb-8">

  <div className="flex items-center justify-between mb-4">
    <h2 className="text-2xl font-bold">
      Новинки
    </h2>
  </div>

  <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">

    {products.map((item) => (
      <div
        key={item.id}
        className="min-w-[260px] bg-white rounded-3xl overflow-hidden shadow-sm"
      >

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[220px] object-contain p-5"
        />

        <div className="p-5">

          <h2 className="text-lg font-semibold">
            {item.title}
          </h2>

          <p className="text-gray-500 mt-2">
            {item.price}
          </p>

          <button
            onClick={() =>
              setCart([...cart, item.title])
            }
            className="w-full mt-4 bg-black text-white py-3 rounded-2xl"
          >
            Купить
          </button>

        </div>
      </div>
    ))}

  </div>
</div>

      {cart.length > 0 && (
  <div className="fixed bottom-5 left-5 right-5 bg-black text-white rounded-3xl p-5 shadow-2xl">
    
    <div className="flex items-center justify-between">
      
      <div>
        <p className="text-sm text-gray-400">
          Корзина
        </p>

        <h2 className="text-xl font-bold">
          {cart.length} товаров
        </h2>
      </div>

      <button
        className="bg-white text-black px-5 py-3 rounded-2xl font-semibold"
      >
        Оформить
      </button>

    </div>
  </div>
)}
  </>
)}
{/* Bottom Tab Bar */}

{/* Catalog Screen */}

{activeTab === "catalog" && (
  <div className="mb-32">

    <h2 className="text-3xl font-bold mb-6">
      Каталог
    </h2>

    {/* Categories */}
    {!selectedCategory && (
      <div className="grid grid-cols-3 gap-5">

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() =>
              setSelectedCategory(category.name)
            }
            className="w-full aspect-square bg-white rounded-3xl p-4 shadow-sm active:scale-95 transition"
          >

            <img
              src={category.image}
              alt={category.name}
              className="w-24 h-24 object-contain mx-auto"
            />

          </button>
        ))}

      </div>
    )}

    {/* Apple Products */}
    {selectedCategory === "Apple" && (
      <div>

        <button
          onClick={() => setSelectedCategory("")}
          className="mb-5 text-black flex items-center gap-1 active:scale-95 transition"
        >
          ← Назад
        </button>

        <div className="grid gap-5">

          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[240px] object-contain p-5"
              />

              <div className="p-5">

                <h2 className="text-xl font-semibold">
                  {item.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  {item.price}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    )}

  </div>
)}

{/* Cart Screen */}
{activeTab === "cart" && (
  <div className="mb-32 mt-6">
    <h2 className="text-2xl font-bold mb-4">Корзина</h2>

    {cart.length === 0 ? (
      <p className="text-gray-500">Корзина пустая</p>
    ) : (
      <div className="space-y-3">
        {cart.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between"
          >
            <span className="font-medium">{item}</span>

            <button
              onClick={() =>
                setCart(cart.filter((_, i) => i !== index))
              }
              className="text-red-500"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
)}

<div className="fixed bottom-0 left-0 right-0 z-50 px-5 pb-5">

  <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-[32px] shadow-2xl px-6 py-4">

    <div className="flex items-center justify-between">

      {/* Home */}
<button
  onClick={() => setActiveTab("home")}
  className={`flex flex-col items-center gap-1 ${
    activeTab === "home" ? "text-black" : "text-gray-400"
  }`}
>
        <House size={24} />
        <span className="text-xs font-medium">
          Главная
        </span>
      </button>

      {/* Catalog */}

      <button
  onClick={() => setActiveTab("catalog")}
  className={`flex flex-col items-center gap-1 ${
    activeTab === "catalog"
      ? "text-black"
      : "text-gray-400"
  }`}
>
        <ShoppingBag size={24} />
        <span className="text-xs">
          Каталог
        </span>
      </button>

      {/* Cart */}
<button
  onClick={() => setActiveTab("cart")}
  className={`flex flex-col items-center gap-1 relative ${
    activeTab === "cart" ? "text-black" : "text-gray-400"
  }`}
>

        <div className="relative">
          <ShoppingCart size={24} />

          {cart.length > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
              {cart.length}
            </div>
          )}
        </div>

        <span className="text-xs">
          Корзина
        </span>
      </button>

      {/* Profile */}
      <button className="flex flex-col items-center gap-1 text-gray-400">
        <User size={24} />
        <span className="text-xs">
          Профиль
        </span>
      </button>

    </div>
  </div>
</div>

    </main>
    
  );
  
}

