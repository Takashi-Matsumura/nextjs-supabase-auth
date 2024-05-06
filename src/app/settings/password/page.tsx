const PasswordPage = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="w-2/3">
        <h1 className="font-bold text-xl text-center mt-10">パスワード変更</h1>
        <div className="mt-5">
          <p className="font-bold">新しいパスワード</p>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="新しいパスワード"
            required
            className="border w-full py-2 pl-2"
          />
        </div>
        <div className="mt-5">
          <p className="font-bold">確認用パスワード</p>
          <input
            id="password-confirm"
            name="password-confirm"
            type="password"
            placeholder="確認用パスワード"
            required
            className="border w-full py-2 pl-2"
          />
        </div>
        <button className="w-full bg-black text-white rounded-full py-2 mt-5">
          変更
        </button>
      </div>
    </div>
  );
};

export default PasswordPage;
