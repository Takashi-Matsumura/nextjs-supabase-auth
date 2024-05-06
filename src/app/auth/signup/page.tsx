import { signup } from "@/app/auth/actions";

export default function SignupPage() {
  return (
    <form>
      <div className="flex flex-col items-center justify-top">
        <h1 className="font-bold text-xl mb-5">サインアップ</h1>

        <div className="w-2/3">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="名前"
            required
            className="border w-full py-2 pl-2"
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="メールアドレス"
            required
            className="border w-full py-2 pl-2 mt-5"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="パスワード"
            required
            className="border w-full py-2 pl-2 mt-5"
          />
          <button
            formAction={signup}
            className="w-full bg-black text-white rounded-full py-2 mt-5"
          >
            Sign up
          </button>
          <h1 className="text-center mt-10">ログインはこちら</h1>
        </div>
      </div>
    </form>
  );
}
