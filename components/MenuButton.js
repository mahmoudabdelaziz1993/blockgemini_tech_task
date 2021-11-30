import link from "next/link";
import { MenuAlt4Icon, XIcon } from "@heroicons/react/solid";
function MenuButton() {
  return (
    <div className="flex items-center justify-center p-1 bg-gray-100 rounded-full w-14 h-14">
      <MenuAlt4Icon />
      <div className="absolute top-0 left-0 flex flex-col hidden min-w-full min-h-screen text-gray-900 bg-gray-100">
        <div className="flex justify-end w-full">
          <div className="p-1 mt-5 ml-5 bg-gray-400 rounded-full shadow-lg w-14 h-14">
            <XIcon />
          </div>
        </div>
        <nav className="flex flex-col items-center justify-center flex-grow w-full ">
          <a href="" className="mb-4 text-6xl font-semibold text-gray-900">
            Home
          </a>
          <a href="" className="mb-4 text-6xl font-semibold text-gray-900">
            add post
          </a>
        </nav>
      </div>
    </div>
  );
}

export default MenuButton;
