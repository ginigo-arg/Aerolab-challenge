import SvgArrowLeft from "../icons/arrowLeft";
import SvgArrowRight from "../icons/arrowRight";

export default function () {
  return (
    <div className="border h-10 rounded-md px-2 flex flex-row justify-center">
      <button className="bg-gray-900 mx-auto my-auto">
        <SvgArrowLeft />
      </button>
      <h1>page1</h1>
      <button className="bg-gray-200">
        <SvgArrowRight />
      </button>
    </div>
  );
}
