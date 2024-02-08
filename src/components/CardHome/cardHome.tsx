import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export interface CardHomeProps {
  title: string;
  subTitle: string;
  description: string;
  image: string;
}

const CardHome: React.FC<CardHomeProps> = ({
  title,
  subTitle,
  description,
  image,
}) => {
  return (
    <div className="my-10">
      <div className=" flex flex-col items-center justify-center gap-3">
        <Image
          src={image}
          alt="agents"
          width={2000}
          height={0}
          className="w-[1159px] h-[383px]"
        />
        <div className="absolute  h-[383px] flex flex-col justify-around gap-3 py-14 w-7/12">
          <div className="flex flex-col gap-3 w-4/12 text-start">
            <h1 className="uppercase text-6xl font-anton font-bold text-[#ECE8E1]">
              {title}
            </h1>
            <p className="uppercase font-anton text-[#383E3A]">{subTitle}</p>
            <p className="text-[#7B857E] font-anton">{description}</p>
          </div>
          <div className="w-1/3 p-1">
            <Button
              size="lg"
              radius="none"
              color="secondary"
              className="w-full text-[#ECE8E1]">
              VER AGENTES
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
