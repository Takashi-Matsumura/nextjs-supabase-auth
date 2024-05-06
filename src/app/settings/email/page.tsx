import { createClient } from "@/utils/supabase/server";

const EmailPage = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="w-2/3">
        <h1 className="font-bold text-xl text-center mt-10">
          メールアドレス変更
        </h1>
        <div className="mt-5">
          <p className="font-bold">現在のメールアドレス</p>
          <p>{data.user?.email}</p>
        </div>
        <div className="mt-5">
          <p className="font-bold">新しいメールアドレス</p>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="新しいメールアドレス"
            required
            className="border w-full py-2 pl-2 focus:outline-none focus:border-sky-500"
          />
        </div>
        <button className="w-full bg-black text-white rounded-full py-2 mt-5">
          変更
        </button>
      </div>
    </div>
  );
};

export default EmailPage;
