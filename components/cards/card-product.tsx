import SvgCoin from "../icons/coin";

type CardProduct = {
  name: string;
  category: string;
  price: number;
  image: string;
};

export default function CardProduct({
  name,
  category,
  price,
  image,
}: CardProduct) {
  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm p-2 ">
          <img className="rounded-t-lg" src={image} alt="" />

          <div className="p-6">
            <div className="flex flex-row items-center justify-start">
              <SvgCoin />
              <h2 className="font-bold text-2xl text-gray-600">{`${price}`}</h2>
            </div>
            <h5 className="text-gray-900 text-md font-medium mb-1">{name}</h5>
            <p className="text-gray-700 text-base mb-4">{category}</p>
            <button
              type="button"
              className=" w-full h-10 font-bold tracking-wide bg-gradient-to-r from-sky-500 to-indigo-500 inline-block px-6 py-2.5  text-white text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg"
            >
              Reedem
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
