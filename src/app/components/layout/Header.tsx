"use server";

import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

type HeaderProps = {
  style?: React.CSSProperties;
};

const Header: React.FC<HeaderProps> = async ({ style }) => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  //console.log(data);

  return (
    <header
      style={style}
      className="bg-black text-white shadow-lg shadow-gray-200 py-4"
    >
      <div className="container max-w-screen mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Welcome {data.user ? data.user.email : "Guest"}
        </Link>

        <div>
          {data.user ? (
            <Link href="/logout">Logout</Link>
          ) : (
            <div className="space-x-5">
              <Link href="/login">Login</Link>
              <Link href="/signup">Signup</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
