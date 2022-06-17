import SvgCoin from "../icons/coin";

export default function ContainerCoins(): JSX.Element {
  return (
    <>
      <div className="w-26 border rounded-md flex flex-row justify-between items-center px-2 py-1 ">
        <SvgCoin />
        <p className="font-bold">32.212</p>
      </div>
    </>
  );
}
