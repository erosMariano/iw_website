import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../../public/images/logo.png";

function Header() {
  return (
    <header className="container px-6 mt-10 flex items-center justify-between">
      <Image
        src={Logo}
        alt="IW English School"
        width={149}
        height={49.15}
        quality={100}
      />

      <nav>
        <ul className="flex bg-white px-4 py-2 rounded w-max">
          <li className="py-2 px-4">
            <Link href="#" className="font-medium text-gray-500">
              Home
            </Link>
          </li>
          <li className="py-2 px-4">
            <Link href="#" className="font-medium text-gray-500">
              Features
            </Link>
          </li>
          <li className="py-2 px-4">
            <Link href="#" className="font-medium text-gray-500">
              Pricing
            </Link>
          </li>
          <li className="py-2 px-4">
            <Link href="#" className="font-medium text-gray-500">
              Intergrations
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-5">
        <Link href="#" className="font-medium text-white py-2 px-4">
          Register
        </Link>

        <Link
          href="#"
          className="font-medium text-white py-2 px-4 bg-[#B953D1] rounded"
        >
          Let&apos;s start
        </Link>
      </div>
    </header>
  );
}

export default Header;
