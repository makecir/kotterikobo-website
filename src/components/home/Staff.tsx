import "@/styles/util.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const member = [
  { role: "運営・ゲームデザイン", name: "こってり工房" },
  {
    role: "イラストレーション",
    name: "灰刃ねむみ",
    href: "https://twitter.com/haibanemumi",
  },
  {
    role: "グラフィックデザイン",
    name: "Rimoka",
    href: "https://twitter.com/Shuncnoiclecoil",
  },
];

export function Staff() {
  return (
    <>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Staff
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">Description</p> */}
          <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              <ul role="list" className="mt-6 space-y-8">
                {member.map((item) => (
                  <li key={item.name}>
                    <div className="text-base font-medium text-gray-900">
                      {item.role}: {item.name}
                      {item.href && (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base leading-6 text-gray-900 hover:text-gray-400 link-icon"
                        >
                          <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            className="icon-small"
                          />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
