type Props = {
  children?: React.ReactNode;
};

export default function LayoutProducts({ children }: Props) {
  return <div className="mx-auto max-w-6xl min-h-screen">{children}</div>;
}
