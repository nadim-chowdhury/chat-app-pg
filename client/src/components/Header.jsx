import { IoIosChatboxes } from "react-icons/io";
import { AiOutlinePoweroff } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {
  const isAuth = true;

  return (
    <header className="flex justify-between items-center mt-2">
      <div className="flex items-center text-3xl w-[85%] h-[56px] p-3 rounded-lg bg-slate-200 text-slate-700">
        <IoIosChatboxes />
        <h1 className="font-bold ">onChat</h1>
      </div>

      {isAuth && (
        <Link
          to="/login"
          className="w-[15%] bg-slate-200 text-slate-700 rounded-lg ml-2 h-[56px] flex justify-center items-center"
        >
          <AiOutlinePoweroff className="w-[18px] mx-auto" />
        </Link>
      )}
    </header>
  );
}
