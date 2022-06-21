type Props = {
  children?: React.ReactNode;
};

export default function LayoutProducts({ children }: Props) {
  return (
    <div className="mx-auto max-w-6xl min-h-screen">
      <div className="flex flex-row justify-center lg:justify-start space-x-2 mt-10 mb-3">
        <h5 className="text-center lg:text-start text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
          TECH
        </h5>
        <h5 className="text-center lg:text-start text-3xl font-extrabold text-gray-800">
          PRODUCTS
        </h5>
      </div>
      {children}
    </div>
  );
}
