"use client";
import { useState } from "react";

import ProductView from "@/components/home/ProductView";

const products = [
  {
    id: 3,
    name: "DJ部アペンド：勧悪懲善",
    description: "破正顕邪アペンドディスク",
    price: "1,000 JPY",
    playablePlayers: "3〜5 人",
    estimatedTime: "60 分",
    targetAge: "8 歳以上",
    links: [
      {
        name: "ボドゲーマ",
        href: "https://bodoge.hoobby.net/games/dj-bu-append-kanaku-chouzen",
      },
      {
        name: "メロンブックス",
        href: "https://www.melonbooks.co.jp/detail/detail.php?product_id=2392256",
      },
    ],
    imageSrc: "/djbu_append_2.png",
    imageAlt: "DJ部アペンド：勧悪懲善",
  },
  {
    id: 2,
    name: "モンジャモ！",
    description: "三目並べバトルロワイヤル",
    playablePlayers: "3〜5 人",
    estimatedTime: "10〜30 分",
    targetAge: "8 歳以上",
    price: "1,000 JPY",
    links: [
      {
        name: "ボドゲーマ",
        href: "https://bodoge.hoobby.net/games/monjamo-monja-vs-mortar",
      },
      {
        name: "メロンブックス",
        href: "https://www.melonbooks.co.jp/detail/detail.php?product_id=2392255",
      },
    ],
    imageSrc: "/monjamo6.jpg",
    imageAlt: "モンジャモ！",
  },
  {
    id: 1,
    name: "DJ部",
    description: "ダイナミックサイコロアクション",
    price: "1,000 JPY",
    playablePlayers: "3〜5 人",
    estimatedTime: "60 分",
    targetAge: "8 歳以上",
    links: [
      {
        name: "ボドゲーマ",
        href: "https://bodoge.hoobby.net/games/dj-bu-second-edition",
      },
      {
        name: "メロンブックス",
        href: "https://www.melonbooks.co.jp/detail/detail.php?product_id=2392257",
      },
    ],
    imageSrc: "/djbu5.png",
    imageAlt: "DJ部",
  },
];

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const [openIndex, setOpenIndex] = useState(-1);

  const openDialog = (index: number) => {
    setOpenIndex(index);
  };

  function closeDialog() {
    setOpenIndex(-1);
  }

  return (
    <>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Products
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            こってり工房の作品を紹介します！
          </p>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <div>
                  <div
                    key={product.id}
                    className="group relative"
                    onClick={() => openDialog(product.id)}
                  >
                    {/* href を有効にしたときに↓に group-hover:opacity-75 を加える */}
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-white lg:aspect-none lg:h-80 shadow-lg">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-lg text-gray-700">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <ProductView
                    isOpen={openIndex === product.id}
                    onClose={closeDialog}
                    product={product}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
