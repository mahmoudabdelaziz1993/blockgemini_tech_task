import Link from "next/link";
import { MenuAlt4Icon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
function MenuButton() {
  const [open, setOpen] = useState(false);
  const Toggle = () => setOpen(!open);
  return (
    <div
      className="flex items-center justify-center p-1 bg-gray-100 rounded-full cursor-pointer w-14 h-14"
      onClick={Toggle}
    >
      <MenuAlt4Icon />
      <div
        className={`absolute top-0 left-0 ${
          open ? "flex flex-col z-20" : "hidden"
        }   min-w-full min-h-screen text-gray-900 bg-gray-100`}
      >
        <div className="flex justify-end w-full">
          <div
            className="p-1 mt-3 mr-8 bg-gray-400 rounded-full shadow-lg w-14 h-14"
            onClick={Toggle}
          >
            <XIcon />
          </div>
        </div>
        <nav className="flex flex-col items-center justify-center flex-grow w-full gap-5 ">
          <Link href="/">
            <a className="mb-4 text-6xl font-semibold text-gray-900 capitalize hover:underline hover:italic">
              Home
            </a>
          </Link>
          <Link href="/posts/add">
            <a className="mb-4 text-6xl font-semibold text-gray-900 capitalize hover:underline hover:italic">
              add post
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default MenuButton;
