import React from "react";
import { IoSearch } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";
import { store } from "../../utils/store";


function Header() {
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
            <p className="text-2xl">{store.getState().name.value}</p>
            <p className="text-lg text-gray-400">{store.getState().role.value}</p>
          </div>
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            className="w-12 h-12"
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
