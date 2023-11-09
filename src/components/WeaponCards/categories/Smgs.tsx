import { Weapon } from "@/app/api/weapons/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SmgProps {
  weapon: Weapon;
}

const Smgs: React.FC<SmgProps> = ({ weapon }) => {
  console.log(weapon);
  return (
    <div className="">

    <Link href={`/weapons/${weapon.uuid}`}>
      <div className="flex flex-col justify-between my-10 bg-[#2e4659] w-[270px] h-40 border border-red-600 ">
        <Image
          src={weapon.displayIcon}
          alt="icon"
          width={240}
          height={0}
          className="mx-auto p-5 object-cover my-auto"
        />
        <p className="text-white bg-[#425366] flex justify-center mt-5 font-normal">
          {weapon.displayName}
        </p>
      </div>
    </Link>
  </div>
  );
};

export default Smgs;
