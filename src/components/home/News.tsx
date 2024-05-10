import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const posts = [
  {
    id: 3,
    title: "ゲームマーケット 2024 春お疲れ様でした！ + 商品委託開始のお知らせ",
    // href: "#",
    description: `
      ゲームマーケット 2024 春 お疲れ様でした！！土日両日ともに多くの方にお越しいただき、誠にありがとうございました！！
      今回取り扱った作品については、ぬいぐるみを除いて全て委託販売を開始いたしましたので、ぜひお手に取っていただければと思います。
      今後ともこってり工房をよろしくお願いいたしますっ！
      `,
    date: "2024/04/29",
    datetime: "2024-04-29",
    category: {
      title: "ゲームマーケット",
      // href: "#"
    },
    links: [
      {
        text: "ボドケーマ 「こってり工房」",
        href: "https://bodoge.hoobby.net/games?search%5Bfreeword%5D=%E3%81%93%E3%81%A3%E3%81%A6%E3%82%8A%E5%B7%A5%E6%88%BF%EF%BC%88Kotteri+Kobo%EF%BC%89",
      },
      {
        text: "メロンブックス「こってり工房」",
        href: "https://www.melonbooks.co.jp/circle/index.php?circle_id=125577",
      },
    ],
    author: {
      name: "2号",
      role: "",
      // href: "#",
      imageUrl: "author/2go.png",
    },
  },
  {
    id: 2,
    title:
      "ゲームマーケット 2024 春で新作「DJ部アペンド：勧悪懲善」を頒布します【両 - A05】",
    // href: "#",
    description: `
      ご無沙汰しております。ゲームマーケット 2024 春にて、新作「DJ部アペンド：勧悪懲善」を頒布させていただくことになりました。
      こちらは、旧作ゲーム「DJ部」の拡張パックとなっており、「DJ部」本来のグルーヴはそのままに、波乱に満ちたDJライフをお楽しみいただける内容となっております。
      詳細はゲームマーケットのブログ記事をご覧ください。
      また、新作「DJ部アペンド：勧悪懲善」の発売を記念して、旧作「DJ部」をより洗練されたコンポーネントで再リリースいたします。
      他にも、1号のぬいぐるみや、旧作も取り扱っておりますので、ぜひお立ち寄りください。
      `,
    date: "2024/04/21",
    datetime: "2024-04-21",
    category: {
      title: "ゲームマーケット",
      // href: "#"
    },
    links: [
      {
        text: "ゲームマーケット - DJ部アペンド：勧悪懲善",
        href: "https://gamemarket.jp/game/183304",
      },
      {
        text: "ゲームマーケット - お品書き",
        href: "https://gamemarket.jp/blog/188833",
      },
    ],
    author: {
      name: "店長",
      role: "",
      // href: "#",
      imageUrl: "author/shop_owner.png",
    },
  },
  {
    id: 1,
    title: "ゲームマーケット 2024 春に出展します！【両 - A05】",
    // href: "#",
    description: `
      こんにちは！こってり工房です！ゲームマーケット 2024 春に私達こってり工房も出展します！
      現在鋭意制作中ですので、詳細の発表までしばらくお待ち下さい！初参加の 2023 年春からもう 1 年も経つんですね…
      `,
    date: "2024/03/30",
    datetime: "2024-03-30",
    category: {
      title: "ゲームマーケット",
      // href: "#"
    },
    links: [],
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
          {/* border-t border-gray-200  */}
          <div className="space-y-16 pt-10 sm:pt-16">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-3xl flex-col items-start justify-between"
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
                    {/* <span className="absolute inset-0" /> */}
                    {post.title}
                    {/* </a> */}
                  </h3>
                  <p className="mt-5 line-clamp-50 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {post.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base leading-6 text-blue-500 link-icon underline"
                        >
                          {link.text}
                          <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            className="icon-small  link-icon"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
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
