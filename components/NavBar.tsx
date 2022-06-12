import Image from "next/image";

type User = {
  user: string;
};
export default function NavBar({ user }: User) {
  return (
    <div className="flex flex-row justify-between items-center px-5 py-2">
      <Image
        src="/images/aerolab-logo.svg"
        width={40}
        height={40}
        alt="Aerolab"
      />
      <p>{user}</p>
    </div>
  );
}
