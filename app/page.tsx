"use client";

export default function Home() {
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

  return (
    <main className="min-h-screen bg-[#f5f5f7] p-5">
      {/* Header */}
      <div className="mb-8">
        <p className="text-gray-500 text-sm mb-2">
          Telegram Mini App
        </p>

        <h1 className="text-2xl font-bold">
          MosAppleTorg Каталог
        </h1>
      </div>

      {/* Products */}
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
                  alert(`Вы выбрали ${item.title}`)
                }
                className="w-full bg-blue-500 text-white py-4 rounded-2xl text-lg font-medium hover:opacity-90 transition"
              >
                Купить
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}