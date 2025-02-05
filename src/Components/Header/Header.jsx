import React from "react";
import { IoSearch } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";

function Header() {
  const userName = "Mr. Admin Saha";
  const sms = 5;
  const notification = 7;

  return (
    <div className="bg-white flex justify-between px-20 py-3 shadow-lg">
      <div className="flex flex-row items-center gap-5 text-2xl">
        <p className="text-gray-400 text-3xl">
          <IoSearch />
        </p>
        <input
          placeholder="Find Something..."
          className="border-none outline-none px-5 py-2 bg-transparent"
          type="text"
        />
      </div>
      <div className="flex flex-row items-center gap-5">
        <div className="flex flex-row items-center gap-5">
          <div className="flex flex-col items-end">
            <p className="text-2xl">{userName}</p>
            <p className="text-lg text-gray-400">Admin</p>
          </div>
          <img
            src="data:image/jpeg;base64,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"
            className="w-14 h-14"
          />
        </div>
        <button className="relative h-full w-14">
          {sms > 0 && <p className="text-sm absolute top-0 right-0 bg-red-600 w-8 h-8 rounded-full border-[4px] border-pink-200 text-white flex items-center justify-center">{sms}</p>}
          <TiMessages className="text-4xl"/>
        </button>
        <button className="relative h-full w-14">
          {notification > 0 && <p className="text-sm absolute top-0 right-0 bg-red-600 w-8 h-8 rounded-full border-[4px] border-pink-200 text-white flex items-center justify-center">{notification}</p>}
          <IoMdNotificationsOutline className="text-4xl"/>
        </button>
      </div>
    </div>
  );
}

export default Header;
