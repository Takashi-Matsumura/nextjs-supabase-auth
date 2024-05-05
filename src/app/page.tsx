import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  return (
    <div className="text-center text-xl">
      <h1>Home</h1>
      {data?.user ? <div>ログイン済</div> : <div>未ログイン</div>}
    </div>
  );
}
