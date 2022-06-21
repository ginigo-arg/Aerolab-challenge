import Image from "next/image";
import toast from "react-hot-toast";
import { GRAY_600 } from "../../colors";
import { SvgClose } from "../icons/close";

export const SuccesToast = (message, image) => {
  return toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow rounded-md pointer-events-auto flex ring-1 ring-sky-500 ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <Image
              className="h-10 w-10"
              src={image}
              alt="succes"
              width={50}
              height={50}
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">¡Congrulations!</p>
            <p className="mt-1 text-sm text-gray-500">{message}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <SvgClose className="h-6 w-6" color={GRAY_600} />
        </button>
      </div>
    </div>
  ));
};
