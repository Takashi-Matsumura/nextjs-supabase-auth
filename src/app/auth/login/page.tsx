import { login } from "@/app/auth/actions";

export default function LoginPage() {
  return (
    <form>
      <div className="flex flex-col items-center justify-top">
        <h1 className="font-bold text-xl mb-5">ログイン</h1>

        <div className="w-2/3">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="メールアドレス"
            required
            className="border w-full py-2 pl-2 focus:outline-none focus:border-sky-500"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="パスワード"
            required
            className="border w-full py-2 pl-2 mt-5 focus:outline-none focus:border-sky-500"
          />
          <button
            formAction={login}
            className="w-full bg-black text-white rounded-full py-2 mt-5"
          >
            Log in
          </button>
          <h1 className="text-center mt-10">パスワードを忘れた方はこちら</h1>
          <h1 className="text-center mt-3">アカウントを作成する</h1>
        </div>
      </div>
    </form>
  );
}
