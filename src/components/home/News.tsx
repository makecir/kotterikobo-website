const posts = [
  {
    id: 1,
    title: "ゲームマーケット 2024 春に出展します！【両 - A05】",
    // href: "#",
    description:
      "こんにちは！こってり工房です！ゲームマーケット 2024 春に私達こってり工房も出展します！現在鋭意制作中ですので、詳細の発表までしばらくお待ち下さい！初参加の 2023 年春からもう 1 年も経つんですね…",
    date: "2024/03/30",
    datetime: "2024-03-30",
    category: {
      title: "ゲームマーケット",
      // href: "#"
    },
    author: {
      name: "1号",
      role: "",
      // href: "#",
      imageUrl: "author/1go.png",
    },
  },
  // More posts...
];

export default function News() {
  return (
    <>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            News
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            近況をお知らせします！
          </p>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    // href={post.category.href}
                    // 有効化時に↓に hover:bg-gray-100 を加える
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  {/* href 有効化時に↓に group-hover:text-gray-600 を加える */}
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    {/* <a href={post.href}> */}
                    <span className="absolute inset-0" />
                    {post.title}
                    {/* </a> */}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      {/* <a href={post.author.href}> */}
                      <span className="absolute inset-0" />
                      {post.author.name}
                      {/* </a> */}
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
