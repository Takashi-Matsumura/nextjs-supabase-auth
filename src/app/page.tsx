import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="text-center text-xl">
      {data ? <div>ログイン済</div> : <div>未ログイン</div>}
    </div>
  );
}
