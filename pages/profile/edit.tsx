import type { NextPage } from "next";
import Button from "components/Button";
import Input from "components/Input";
import Layout from "components/Layout";

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
        <Input
          label="Email Address"
          name="email"
          className="px-3 space-y-2"
          kind="email"
        />
        <Input
          label="Phone Number"
          name="phone"
          className="px-3 space-y-2"
          kind="phone"
        />
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
