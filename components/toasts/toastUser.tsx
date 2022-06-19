import Image from "next/image";
import toast from "react-hot-toast";
import { GRAY_600 } from "../../colors";
import { SvgClose } from "../icons/close";
import { SvgError } from "../icons/error";
import { SvgSuccess } from "../icons/success";

export const NewPointsToast = (message: string) => {
  return toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow rounded-md pointer-events-auto flex ring-1 ring-green-500 ring-opacity-8`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="bg-green-500 rounded-full flex-shrink-0">
              <SvgSuccess />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">¡Success!</p>
              <p className="mt-1 text-sm text-gray-500">{message}</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-green-500 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <SvgClose className="h-6 w-6" color={GRAY_600} />
          </button>
        </div>
      </div>
    ),
    { position: "bottom-left", duration: 6000 }
  );
};
