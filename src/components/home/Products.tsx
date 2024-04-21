const products = [
  {
    id: 3,
    name: "DJ部アペンド：勧悪懲善",
    href: "#",
    imageSrc: "/djbu_append_2.png",
    imageAlt: "DJ部アペンド：勧悪懲善",
    price: "1,000 JPY",
    description: "破正顕邪アペンドディスク",
  },
  {
    id: 2,
    name: "モンジャモ！",
    href: "#",
    imageSrc: "/monjamo6.jpg",
    imageAlt: "モンジャモ！",
    price: "1,000 JPY",
    description: "三目並べバトルロワイヤル",
  },
  {
    id: 1,
    name: "DJ部",
    href: "#",
    imageSrc: "/djbu5.png",
    imageAlt: "DJ部",
    price: "1,000 JPY",
    description: "ダイナミックサイコロアクション",
  },
  // More products...
];

export default function Products() {
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
                <div key={product.id} className="group relative">
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
                        {/* <a href={product.href}> */}
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                        {/* </a> */}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.description}
                      </p>
                    </div>
                    {/* <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
