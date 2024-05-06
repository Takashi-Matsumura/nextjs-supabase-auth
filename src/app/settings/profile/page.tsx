import Image from "next/image";
import { createClient } from "@/utils/supabase/server";

const ProfilePage = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="w-2/3">
        <h1 className="font-bold text-xl text-center mt-10">プロフィール</h1>
        <div className="mb-5">
          <div className="flex flex-col text-sm items-center justify-center mt-5">
            <div className="relative w-24 h-24 mb-5">
              <Image
                src={"/default.png"}
                className="rounded-full object-cover"
                alt="avatar"
                fill
              />
            </div>
            <input type="file" id="avatar" />
            {/* {fileMessage && (
              <div className="text-center text-red-500 my-5">{fileMessage}</div>
            )} */}
          </div>
        </div>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="名前"
          required
          className="border w-full py-2 pl-2 mt-3 focus:outline-none focus:border-sky-500"
        />
        <textarea
          id="introduce"
          name="introduce"
          placeholder="自己紹介"
          rows={5}
          className="border w-full py-2 pl-2 mt-3 focus:outline-none focus:border-sky-500"
        />
        <button className="w-full bg-black text-white rounded-full py-2 mt-5">
          変更
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
