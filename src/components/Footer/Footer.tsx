import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#111111]">
      <div className="py-10 flex mx-auto w-[80%] justify-around">
        <p className="text-white">Hecho por <b>ELIÁN REHBANI</b></p>
        <Image src="/volume.svg" width={20} height={0} alt="vo" />
      </div>
    </div>
  );
}

export default Footer;
