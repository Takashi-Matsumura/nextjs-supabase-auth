import { login } from "@/app/auth/actions";
import LogoutButton from "@/app/settings/components/LogoutButton";

export default function Login() {
  return (
    <form>
      <div className="flex flex-col items-center justify-top">
        <h1 className="font-bold text-xl mb-5">ログアウトしますか？</h1>

        <div className="w-2/3">
          <LogoutButton />
        </div>
      </div>
    </form>
  );
}
