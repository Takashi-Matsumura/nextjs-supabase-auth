"use client";

import { logout } from "@/app/settings/profile/actions";

const LogoutButton = () => {
  const handleLogout = () => {
    logout()
      .then((response) => {
        // handle response here
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return <button onClick={handleLogout}>Log out</button>;
};

export default LogoutButton;
