import { login, signup } from "@/app/auth/actions";

export default function SignupPage() {
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
        <button formAction={signup}>Sign up</button>
      </div>
    </form>
  );
}
