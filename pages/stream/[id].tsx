import Layout from "components/Layout";
import type { NextPage } from "next";

const StreamDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="pt-10 space-y-4">
        <div className="px-3 pt-4">
          <div className="w-full bg-slate-400 aspect-video rounded-md shadow-sm" />
          <h1 className="mt-2 text-xl font-bold text-gray-900">Galaxy S100</h1>
          <span className="text-lg mt-3 text-gray-900">$100</span>
          <p className="text-base my-3 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <section className="mt-5">
            <h4 className="font-semibold  text-base">라이브 채팅</h4>
            <div className="mt-4 pb-16 h-[50vh]  overflow-y-scroll px-3 scrollbar-hide">
              <div className="space-y-4 pb-6">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-slate-300 rounded-full" />
                  <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>Hi how much are you selling the air</p>
                  </div>
                </div>
                <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                  <div className="w-8 h-8 bg-slate-300 rounded-full" />
                  <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>I want $20,000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-slate-300 rounded-full" />
                  <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>Hi how much are you selling the air</p>
                  </div>
                </div>
                <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                  <div className="w-8 h-8 bg-slate-300 rounded-full" />
                  <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>I want $20,000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-slate-300 rounded-full" />
                  <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>Hi how much are you selling the air</p>
                  </div>
                </div>
                <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                  <div className="w-8 h-8 bg-slate-300 rounded-full" />
                  <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>I want $20,000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-slate-300 rounded-full" />
                  <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>Hi how much are you selling the air</p>
                  </div>
                </div>
                <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                  <div className="w-8 h-8 bg-slate-300 rounded-full" />
                  <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
                    <p>I want $20,000</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="fixed w-full mx-auto bottom-0 left-0 right-0 inset-x-0 bg-gray-200 px-4 pb-4 pt-2">
          <div className="flex items-center relative">
            <input
              className="pr-12 shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-400 focus:border-orange-500 focus:outline-none"
              type="text"
            />
            <div className="absolute text-gray-500 inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button
                type="button"
                className="flex items-center bg-orange-400 rounded-full px-3 text-sm text-white
                hover:bg-orange-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400
            "
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StreamDetail;