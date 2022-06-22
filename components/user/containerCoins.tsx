import { useEffect } from "react";
import { useFilters } from "../../context/filterContext";
import SvgCoin from "../icons/coin";
import { formatCurrency } from "../../utils/formatNumber";
import { useUserInfo } from "../../context/userContext";

export default function ContainerCoins(): JSX.Element {
  const { userState, isLoading } = useUserInfo();
  useEffect(() => {}, [userState]);
  return (
    <div className="w-26 border rounded-md flex flex-row justify-between items-center px-2 py-1 shadow-lg">
      <SvgCoin />
      <p className="font-bold">
        {isLoading ? "..." : formatCurrency(userState?.points)}
      </p>
    </div>
  );
}
