import { useEffect } from "react";
import { useFilters } from "../../context/filterContext";
import SvgCoin from "../icons/coin";
import { formatCurrency } from "../../utils/formatNumber";

export default function ContainerCoins(): JSX.Element {
  const { state } = useFilters();
  useEffect(() => {}, [state]);
  return (
    <>
      <div className="w-26 border rounded-md flex flex-row justify-between items-center px-2 py-1 shadow-lg">
        <SvgCoin />
        <p className="font-bold">{formatCurrency(state.user.points)}</p>
      </div>
    </>
  );
}
