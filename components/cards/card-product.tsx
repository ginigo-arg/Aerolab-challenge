import { useEffect, useState } from "react";
import { useFilters } from "../../context/filterContext";
import { postReedem } from "../../pages/api/api";
import SvgCoin from "../icons/coin";
import { Toaster } from "react-hot-toast";
import { SuccesToast } from "../toasts/toastProducts";
import { formatCurrency } from "../../utils/formatNumber";
import { ToastError } from "../toasts/toastError";

type CardProduct = {
  name: string;
  category: string;
  price: number;
  image: string;
  id: string;
  isReedem: boolean;
};

export default function CardProduct({
  name,
  category,
  price,
  image,
  id,
  isReedem,
}: CardProduct) {
  const [loading, setLoading] = useState<boolean>(false);
  const { handleRestart, state } = useFilters();
  const reedemProduct = async () => {
    setLoading(true);
    const resp = await postReedem(id);

    if (resp.message) {
      setLoading(false);
      handleRestart(price);
      SuccesToast(`You reedemed a ${name}`, image);
      //SuccesToast(resp.message, image);
    } else {
      ToastError("We're sorry. We couldn't reedem this product");
    }
  };

  useEffect(() => {}, [loading]);
  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm  p-2">
          <img className="lg:h-44 mx-auto" src={image} alt={name} />
          <div className="p-6">
            <div className="flex flex-row items-center justify-start">
              <SvgCoin />
              <h2 className="font-bold text-2xl text-gray-600">
                {formatCurrency(price)}
              </h2>
            </div>
            <h5 className="text-gray-900 text-sm md:text-md lg:text-xl text-md font-medium mb-1">
              {name}
            </h5>
            <p className="text-gray-700 text-base mb-4">{category}</p>
            <button
              onClick={reedemProduct}
              disabled={loading || isReedem}
              type="button"
              className={`${
                loading || isReedem
                  ? "text-xs md:text-md lg:text-md xl:text-lg cursor-not-allowed w-full h-10 font-bold tracking-wide bg-gray-200 text-slate-400 rounded-md px-3"
                  : "cursor-pointer w-full h-10 font-bold tracking-wide bg-gradient-to-r from-sky-500 to-indigo-500 inline-block px-6 py-2.5  text-white text-xs leading-tight uppercase rounded shadow-md hover:bg-gradient-to-r hover:from-indigo-500 hover:to-sky-500 transition-all"
              } `}
            >
              {isReedem
                ? `You need ${price - state.user.points} coins`
                : loading
                ? "Processing..."
                : "Reedem"}
            </button>
          </div>
        </div>
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
}
