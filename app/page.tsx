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

  const products = [
    
  {
    id: 1,
    title: "iPhone 15 Pro",
    price: "1199€",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-blacktitanium-select",
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

  return (
    <main className="min-h-screen bg-[#f5f5f7] p-5 pb-40">

<div className="sticky top-0 z-50 bg-[#f5f5f7] pb-4">
  <div className="flex items-center justify-between pt-2">
    <div>
      <p className="text-gray-500 text-sm">
        Telegram Mini App
      </p>

      <h1 className="text-3xl font-bold mt-1">
        MosAppleTorg
      </h1>
    </div>

    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
      M
    </div>
  </div>
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

      <div className="grid gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[260px] object-contain bg-white p-5"
            />

            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-xl text-gray-500 mb-5">
                {item.price}
              </p>

              <button
  onClick={() =>
    setCart([...cart, item.title])
  }
                className="w-full bg-blue-500 text-white py-4 rounded-2xl text-lg font-medium hover:opacity-90 transition"
              >
                Купить
              </button>
            </div>
          </div>
        ))}
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
      <button className="flex flex-col items-center gap-1 text-gray-400">
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

