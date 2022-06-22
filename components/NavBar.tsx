import Image from "next/image";
import Link from "next/link";
import ContainerCoins from "./user/containerCoins";
import UserDates from "./user/userDates";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center px-2 lg:px-5 py-2 h-18">
      <div className="w-24 md:w-28">
        <Link href="/">
          <a>
            <Image
              src="/images/aerolab-logo.svg"
              width={40}
              height={40}
              alt="Aerolab"
            />
          </a>
        </Link>
      </div>
      <ContainerCoins />
      <UserDates />
    </div>
  );
}
