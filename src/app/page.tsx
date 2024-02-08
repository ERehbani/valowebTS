import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white">
      <div className="border flex flex-col items-center justify-center gap-3">
        <Image
          src="/agent-home.png"
          alt="agents"
          width={800}
          height={0}
          className="w-[1159px] h-[383px]"
        />
        <div className="absolute border h-[383px] flex flex-col justify-around gap-3 py-14">
          <div className="flex flex-col gap-3 w-1/4 text-start">
            <h1 className="uppercase text-6xl font-tungsten font-bold text-[#ECE8E1]">Agentes</h1>
            <p className="uppercase text-[#383E3A] font-din">conoce a tu equipo</p>
            <p className="text-[#7B857E] font-din">
              Descubre más formas de plantar la spike y dominar a tus enemigos
              con estos guerrilleros, estrategas y cazadores de diferentes
              estilos.
            </p>
          </div>
          <div className="w-1/3 border p-1">
            <Button
              size="lg"
              radius="none"
              color="secondary"
              className="w-full font-din text-[#ECE8E1]"
              >
              VER AGENTES
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
