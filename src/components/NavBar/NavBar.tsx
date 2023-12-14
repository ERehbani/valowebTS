import React from "react";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <div className="h-18 border-b border-b-white text-white mb-10">
      <div className="w-[80%] mx-auto bg-[#111C26] flex justify-around ">
        <div className=" w-96 mx-auto mt-2">
          <Image
            className="p-3"
            src="/elian_valorant.png"
            alt="icon"
            width={150}
            height={0}
          />
        </div>

        <div className="flex justify-around m-auto w-[50%] text-xl ">
          <Link href="/agent">Agents</Link>
          <Link href="/weapons">Weapons</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
