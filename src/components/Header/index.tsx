import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoMdPersonAdd } from "react-icons/io";
import { useContext } from "react";
import { ContactContext } from "@/context";

function Header() {
  // const { addUser, setAddUser } = useContext(ContactContext);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full h-[60px] bg-[#eeeeee] z-50 shadow-lg">
        <div className="container-base flex justify-between items-center p-2">
          <div
            className="min-w-[100px] flex justify-center items-center gap-4 
          text-iconSecondary border-2 border-borderPrimary rounded-lg py-[6px] px-2 hover:bg-[#5c68ac2e] hover:border-transparent 
          transition-all duration-200 cursor-pointer"
          >
            <IoMdPersonAdd size={20} />
            <span>Add</span>
          </div>
          <div className="cursor-pointer">
            <RiLogoutCircleRLine size={25} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
