import Image from "next/image";
import MenuButton from "./MenuButton";
function Navbar() {
  return (
    <div className="flex justify-between min-w-full p-3 px-8 bg-gray-200 shadow-lg bg-opacity-5">
      <div className="flex items-center p-1 bg-gray-100 rounded-full cursor-pointer w-14 h-14">
        <Image src={"/assets/logo.png"} width={48} height={48} alt="L0go" />
      </div>
      <MenuButton />
    </div>
  );
}

export default Navbar;
