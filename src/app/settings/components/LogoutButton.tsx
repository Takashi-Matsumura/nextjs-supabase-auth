"use client";

import { logout } from "@/app/settings/actions";

const LogoutButton = () => {
  const handleLogout = () => {
    logout();
  };

  return (
    <button
      className="w-full bg-red-500 text-white rounded-full py-2 mt-5"
      onClick={handleLogout}
    >
      Log out
    </button>
  );
};

export default LogoutButton;
