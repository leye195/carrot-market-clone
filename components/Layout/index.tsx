import Link from "next/link";
import { useRouter } from "next/router";
import { classnames } from "lib/client/utils";
import Icon from "components/Icon";

type Props = {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: JSX.Element | React.ReactNode;
};

const Layout = ({ children, title, hasTabBar, canGoBack }: Props) => {
  const { back, pathname } = useRouter();

  const handleClick = () => {
    back();
  };

  return (
    <div>
      <div
        className={classnames(
          !canGoBack ? "justify-center" : "",
          "flex items-center   bg-white w-full max-w-xltext-lg font-medium px-5 py-4 fixed text-gray-700 border-b top-0 left-0  z-10"
        )}
      >
        {canGoBack ? (
          <button className="mr-2" type="button" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
          </button>
        ) : null}
        {title && <span>{title}</span>}
      </div>
      <div className={classnames("pt-16", hasTabBar ? "pb-20" : "")}>
        {children}
      </div>
      {hasTabBar && (
        <nav className="fixed bg-white bottom-0  text-gray-700 border-t py-2 px-6 flex justify-between items-center w-full max-w-xl cursor-pointer">
          <Link href="/">
            <a
              className={classnames(
                "flex flex-col items-center justify-center space-y-2",
                pathname === "/" ? "text-orange-400" : ""
              )}
            >
              <Icon.HomeIcon />
              <span className="text-sm">홈</span>
            </a>
          </Link>
          <Link href="/community">
            <a
              className={classnames(
                "flex flex-col items-center justify-center space-y-2",
                pathname === "/community" ? "text-orange-400" : ""
              )}
            >
              <Icon.TownIcon />
              <span className="text-sm">동네생활</span>
            </a>
          </Link>
          <Link href="/stream">
            <a
              className={classnames(
                "flex flex-col items-center justify-center space-y-2",
                pathname === "/stream" ? "text-orange-400" : ""
              )}
            >
              <Icon.LiveIcon />
              <span className="text-sm">라이브</span>
            </a>
          </Link>
          <Link href="/chats">
            <a
              className={classnames(
                "flex flex-col items-center justify-center space-y-2",
                pathname === "/chats" ? "text-orange-400" : ""
              )}
            >
              <Icon.ChatIcon />
              <span className="text-sm">채팅</span>
            </a>
          </Link>
          <Link href="/profile">
            <a
              className={classnames(
                "flex flex-col items-center justify-center space-y-2",
                pathname === "/profile" ? "text-orange-400" : ""
              )}
            >
              <Icon.ProfileIcon />
              <span className="text-sm">나의 당근</span>
            </a>
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Layout;
