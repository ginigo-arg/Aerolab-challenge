import Image from "next/image";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { GRAY_400 } from "../../colors";
import { useFilters } from "../../context/filterContext";
import Button from "../button";
import { SvgClose } from "../icons/close";
import { SvgPlus } from "../icons/plus";
import { ToastError } from "../toasts/toastError";
import { NewPointsToast } from "../toasts/toastUser";

export default function UserDates(): JSX.Element {
  const { state, handleAddCoins } = useFilters();
  const [coinValue, setCoinValue] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);

  const ShowDropDown = () => {
    const id = document.getElementById("dropDown");
    if (id.classList.contains("hidden")) {
      id.classList.remove("hidden");
    } else {
      id.classList.add("hidden");
    }
  };
  const addPoints = async () => {
    setLoading(true);
    const resp = await handleAddCoins(coinValue);
    try {
      if (resp.success) {
        ToastError("We're sorry, we couldn't reedem your coins");
      } else {
        setLoading(false);
        NewPointsToast(`You remeded ${coinValue} coins`);
      }
    } catch {
      ToastError("We're sorry. We detect a problem with your conexion.");
    }
  };

  const getCoinValue = (coin: number) => {
    setCoinValue(coin);
  };

  return (
    <>
      <div className="flex flex-row items-center  justify-around px-1 w-24 md:px-3 md:w-28 py-1">
        <button
          onClick={ShowDropDown}
          className="border rounded-md hover:bg-slate-100"
        >
          <SvgPlus className="h-7 w-7" color={GRAY_400} />
        </button>
        <Image
          className="rounded-full"
          src="/images/Guillermo_francella.png"
          alt={state.user.name}
          width={32}
          height={32}
        />
      </div>

      <div
        id="dropDown"
        className="hidden absolute top-16 right-1 w-72 z-20 flex flex-col justify-between bg-white border rounded-md p-1"
      >
        {/* dropDown head */}
        <div className="border-b-2 relative py-2 mb-3 flex flex-row justify-between items-center w-full font-semibold text-lg text-gray-800">
          <span>Account</span>
          <button onClick={ShowDropDown}>
            <SvgClose className="h-7 w-7" color={GRAY_400} />
          </button>
        </div>
        {/* dropDown body */}
        <div className="flex flex-col justify-between text-center ">
          <h2 className="font-bold text-lg">{state.user.name}</h2>
          <p>
            Add coins at your acount, selecting the score below and push Add
            coins button
          </p>
          <div className="flex flex-row justify-between mt-3 mb-3">
            <Button
              className="px-5 py-1"
              text="1000"
              onClick={() => getCoinValue(1000)}
            />
            <Button
              className="px-5 py-1"
              text="5000"
              onClick={() => getCoinValue(5000)}
            />
            <Button
              className="px-5 py-1"
              text="7500"
              onClick={() => getCoinValue(7500)}
            />
          </div>
          <button
            onClick={addPoints}
            className="w-full h-10 text-white bg-gradient-to-r from-sky-500 to-indigo-500 mb-2 rounded-md font-bold"
          >
            {loading ? "Processing..." : "Add coins"}
          </button>
        </div>
      </div>
    </>
  );
}
