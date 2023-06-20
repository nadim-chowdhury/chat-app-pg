import { IoMdSend } from "react-icons/io";
import Header from "./Header";

export default function Chat() {
  return (
    <section>
      <Header />

      <div className="h-[80vh] bg-slate-200 rounded-lg mt-2"></div>

      <div className="flex justify-center items-center mt-2">
        <input
          type="text"
          placeholder="Enter Your Message"
          className="bg-slate-200 p-4 rounded-lg outline-none w-[85%]"
        />
        <button className="bg-slate-200 text-slate-600 p-4 text-lg rounded-lg w-[15%] h-[56px] ml-2">
          <IoMdSend className="w-[18px] mx-auto" />
        </button>
      </div>
    </section>
  );
}
