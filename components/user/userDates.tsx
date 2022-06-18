import Image from "next/image";
import { GRAY_400 } from "../../colors";
import Button from "../button";
import { SvgClose } from "../icons/close";
import { SvgPlus } from "../icons/plus";

export default function UserDates(): React.ReactNode {
  const ShowDropDown = () => {
    const id = document.getElementById("dropDown");
    if (id.classList.contains("hidden")) {
      id.classList.remove("hidden");
    } else {
      id.classList.add("hidden");
    }
  };
  return (
    <>
      <div className="flex flex-row items-center  justify-around px-3 py-1 w-28">
        <button
          onClick={ShowDropDown}
          className="border rounded-md hover:bg-slate-100"
        >
          <SvgPlus className="h-7 w-7" color={GRAY_400} />
        </button>
        <Image
          className="rounded-full"
          src="/images/Guillermo_francella.png"
          alt=""
          width={32}
          height={32}
        />
      </div>

      <div
        id="dropDown"
        className="absolute top-16 right-1 w-72 z-20 flex flex-col justify-between bg-white border rounded-md p-1"
      >
        {/* dropDown head */}
        <div className="border-b-2 relative py-2 mb-3 flex flex-row justify-between items-center w-full font-semibold text-lg text-gray-800">
          <span>Account</span>
          <button onClick={ShowDropDown}>
            <SvgClose className="h-7 w-7" color={GRAY_400} />
          </button>
        </div>
        {/* dropDown body */}
        <div className="flex flex-col justify-around">
          <div className="flex flex-row justify-between mb-3">
            <Button className="px-5 py-1" text="2500" />
            <Button className="px-5 py-1" text="5000" />
            <Button className="px-5 py-1" text="7500" />
          </div>
          <button className="w-full h-10 text-white bg-gradient-to-r from-sky-500 to-indigo-500 mb-2 rounded-md font-bold">
            Add coins
          </button>
        </div>
      </div>
    </>
  );
}