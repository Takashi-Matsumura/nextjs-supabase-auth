"use server";

import Image from "next/image";
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
          Welcome　({data.user ? data.user.email : "Guest"})
        </Link>

        <div>
          {data.user ? (
            <div className="flex items-center space-x-5">
              <Link href="/settings/profile">
                <div className="relative w-10 h-10">
                  <Image
                    src="/default.png"
                    className="rounded-full object-cover"
                    alt="avatar"
                    fill
                  />
                </div>
              </Link>
            </div>
          ) : (
            <div className="space-x-5">
              <Link href="/auth/login">Login</Link>
              <Link href="/auth/signup">Signup</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
