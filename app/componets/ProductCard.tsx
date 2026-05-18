"use client";

import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
}

export default function ProductCard({
  title,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-[220px] object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>

        <p className="text-gray-500 text-xl mb-5">{price}</p>

        <button className="w-full bg-black text-white py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition">
          <ShoppingCart size={20} />
          Купить
        </button>
      </div>
    </div>
  );
}