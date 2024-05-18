import Image from "next/image";

const people = [
  {
    name: "1号",
    imageUrl: "/author/1go.png",
  },
  {
    name: "2号",
    imageUrl: "/author/2go.png",
  },
  {
    name: "3号",
    imageUrl: "/author/3go.png",
  },
  {
    name: "4号",
    imageUrl: "/author/4go.png",
  },
  {
    name: "店長",
    imageUrl: "/author/shop_owner.png",
  },
  // More Characters...
];

export default function Characters() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Characters
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            こってり工房の作品を彩る魅力的なキャラクターたちを紹介します！
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                className="mx-auto h-24 w-24 rounded-full bg-white shadow-lg"
                src={person.imageUrl}
                alt=""
                width="315"
                height="315"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              {/* <p className="text-sm leading-6 text-gray-600">{person.role}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
