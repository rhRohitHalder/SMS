import { IoSearch } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";
import { store } from "../../utils/store";
import { useNavigate } from "react-router";

function Header() {
  const sms = 5;
  const notification = 7;
  const navigate = useNavigate();

  return (
    <div className="bg-white flex justify-between pl-20 pr-10 py-3 shadow-lg">
      <div className="flex flex-row items-center gap-5 text-2xl">
        <p className="font-semibold">School Menegment System</p>
      </div>
      <div className="flex flex-row items-center gap-5">
        <div className="flex flex-row items-center gap-5">
          <div className="flex flex-col items-end">
            <p className="text-2xl">{store.getState().name.value}</p>
            <p className="text-lg text-gray-400">
              {store.getState().role.value}
            </p>
          </div>
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            className="w-12 h-12"
          />
        </div>
        <button className="relative h-full w-14 cursor-pointer">
          {sms > 0 && (
            <p className="text-sm absolute top-0 right-0 bg-red-600 w-8 h-8 rounded-full border-[4px] border-pink-200 text-white flex items-center justify-center">
              {sms}
            </p>
          )}
          <TiMessages className="text-4xl" />
        </button>
        <button className="relative h-full w-14 cursor-pointer">
          {notification > 0 && (
            <p className="text-sm absolute top-0 right-0 bg-red-600 w-8 h-8 rounded-full border-[4px] border-pink-200 text-white flex items-center justify-center">
              {notification}
            </p>
          )}
          <IoMdNotificationsOutline className="text-4xl" />
        </button>
        <div className="relative flex items-center justify-center">
          <button 
          onClick={() => navigate('/')}
          className="group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32  active:translate-x-1 active:translate-y-1">
            <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
              <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </div>
            <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
              Logout
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
