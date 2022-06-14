import { FilterProvide } from "../../context/filterContext";

type Props = {
  children?: React.ReactNode;
};

export default function LayoutProducts({ children }: Props) {
  return (
    <FilterProvide value={"Provider Filter"}>
      <div className="mx-auto max-w-5xl">{children}</div>;
    </FilterProvide>
  );
}
