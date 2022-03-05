import Button from "components/Button";
import Layout from "components/Layout";
import type { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <Layout title="프로필 수정" canGoBack>
      <div className="py-10 space-y-4">
        <div className="flex flex-col items-center space-y-3 px-3">
          <div className="w-20 h-20 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-offset-2 focus:ring-orange-400 focus:outline-none"
          >
            Change Photo
            <input
              className="hidden"
              type="file"
              id="picture"
              accept="image/*"
            />
          </label>
        </div>
        <div className="px-3 space-y-2">
          <label className="text-sm text-gray-700" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            className="w-full appearance-none px-3 py-2 border-gray-300 rounded-md  placeholder-gray-400 shadow-sm 
                focus:outline-none focus:ring-orange-400 focus:border-orange-400"
            type="email"
            required
          />
        </div>
        <div className="px-3 space-y-2">
          <label className="text-sm text-gray-700" htmlFor="phone">
            Phone Number
          </label>
          <div className="flex rounded-md shadow-md">
            <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
              +82
            </span>
            <input
              id="phone"
              className="w-full appearance-none px-3 py-2 border-gray-300 rounded-r-md   placeholder-gray-400 shadow-sm 
                  focus:outline-none focus:ring-orange-400 focus:border-orange-400"
              type="number"
              required
            />
          </div>
        </div>
        <div className="mt-6 px-3">
          <Button
            type="button"
            className="bg-orange-400 text-white hover:bg-orange-600 px-4 py-2 border-transparent rounded-md  shadow-sm font-medium
            focus:ring-offset-2 focus:ring-orange-400 focus:outline-none w-full
          "
          >
            Update Profile
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
