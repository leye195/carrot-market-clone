import type { NextPage } from "next";
import Link from "next/link";

import Layout from "components/Layout";
import TradeReview from "components/TradeReview";

const Profile: NextPage = () => {
  return (
    <Layout title="나의 당근" hasTabBar>
      <div className="py-5 space-y-8">
        <div className="flex items-center px-3 space-x-3">
          <div className="w-12 h-12 rounded-full bg-slate-400" />
          <div className="flex flex-col ">
            <p className="font-medium text-sm text-gray-700">Steve Jebs</p>
            <Link href="/profile/edit">
              <a>
                <p className="text-xs text-gray-500">Edit Profile &rarr;</p>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex justify-around items-center pb-4 border-b-8">
          <div className="flex flex-col items-center space-y-1 cursor-pointer">
            <Link href="/profile/sold">
              <a>
                <div className="p-3 rounded-full bg-orange-400 text-white hover:bg-orange-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  판매내역
                </span>
              </a>
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-1 cursor-pointer">
            <Link href="/profile/bought">
              <a>
                <div className="p-3 rounded-full bg-orange-400 text-white hover:bg-orange-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  구매내역
                </span>
              </a>
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-1 cursor-pointer">
            <Link href="/profile/loved">
              <a>
                <div className="p-3 rounded-full bg-orange-400 text-white  hover:bg-orange-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  관심목록
                </span>
              </a>
            </Link>
          </div>
        </div>
        <section className="px-3 space-y-4">
          <p className="flex justify-between font-bold text-gray-700 cursor-pointer">
            거래 후기
            <span>&rarr;</span>
          </p>
          <div className="space-y-4 divide-y-[1px]">
            <TradeReview />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Profile;
