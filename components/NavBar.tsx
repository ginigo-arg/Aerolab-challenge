import Image from "next/image";
import ContainerCoins from "./user/containerCoins";
import UserDates from "./user/userDates";

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
      <ContainerCoins />
      <UserDates />
    </div>
  );
}
