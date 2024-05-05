import LogoutButton from "./LogoutButton";
import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <form className="space-y-5">
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
      </div>
      <div className="flex justify-between w-1/3">
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </div>
      <LogoutButton />
    </form>
  );
}
