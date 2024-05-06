import LogoutButton from "@/app/settings/components/LogoutButton";

const LogoutPage = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="w-2/3">
        <h1 className="font-bold text-xl text-center mt-10">
          ログアウトしますか？
        </h1>
        <LogoutButton />
      </div>
    </div>
  );
};

export default LogoutPage;
