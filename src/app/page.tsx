import CardHome, { CardHomeProps } from "@/components/CardHome/cardHome";
import { cardsHome } from "@/data/cardsHome";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white">
      {cardsHome.map((item: CardHomeProps, index: number) => {
        return (
          <CardHome
            key={index}
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
            image={item.image}
          />
        );
      })}
    </div>
  );
}
