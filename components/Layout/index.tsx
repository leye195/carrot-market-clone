import { classnames } from "lib";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: JSX.Element | React.ReactNode;
};

const Layout = ({ children, title, hasTabBar, canGoBack }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
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
            <a className="flex flex-col items-center justify-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="text-sm">홈</span>
            </a>
          </Link>
          <Link href="/community">
            <a className="flex flex-col items-center justify-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <span className="text-sm">동네생활</span>
            </a>
          </Link>
          <Link href="/stream">
            <a className="flex flex-col items-center justify-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">라이브</span>
            </a>
          </Link>
          <Link href="/chats">
            <a className="flex flex-col items-center justify-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <span className="text-sm">채팅</span>
            </a>
          </Link>
          <Link href="/profile">
            <a className="flex flex-col items-center justify-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-sm">나의 당근</span>
            </a>
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Layout;
