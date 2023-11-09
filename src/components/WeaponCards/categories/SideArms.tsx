import { Weapon } from "@/app/api/weapons/interface";
import Image from "next/image";
import Link from "next/link";
import '../globals.css'

interface SideArmsProps {
  weapon: Weapon; // Cambia 'item' por 'weapon' y haz que sea un objeto 'Weapon'
}

const SideArms: React.FC<SideArmsProps> = ({ weapon }) => {
  return (
    <div className="">

      <Link href={`/weapons/${weapon.uuid}`}>
        <div className="sidearm flex flex-col justify-between my-10 bg-[#2e4659] w-[270px] h-40">
          <Image
            src={weapon.displayIcon}
            alt="icon"
            width={200}
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

export default SideArms;
