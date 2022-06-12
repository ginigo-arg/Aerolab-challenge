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
            <h2 className="font-semibold text-2xl mb-3">{`$${price}`}</h2>
            <h5 className="text-gray-900 text-xl font-medium mb-1">{name}</h5>
            <p className="text-gray-700 text-base mb-4">{category}</p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
