import Link from "next/link";
import React from "react";
import { ProfileIcon } from "../_assets/profile-icon";

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container">
      <div className="flex items-center gap-[33px] rounded-md shadow-md my-8 bg-white p-6">
        <ProfileIcon />
        <div className="flex flex-col gap-[10px]">
          <h4 className="text-rgb-17-20-45 font-cairo text-30 font-bold leading-40">
            Суғдиёна Икромова
          </h4>
          <p className="profile__text">+998 90 253 77 53</p>
          <p className="profile__id">ID: 0001 Баланс: 45 000 сўм</p>
        </div>
      </div>
      <div className="flex gap-[100px] ">
        <div className="p-4 h-[20vh] w-[300px] border shadow-md flex flex-col gap-4 rounded-md">
          <Link href={`/users/subscription`}>Обуна бўлиш</Link>
          <Link href={`/users/e-account`}>Э-Хисоб</Link>
          <Link href={`/users/books`}>Китобларим</Link>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default UserLayout;
