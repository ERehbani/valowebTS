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
        <div className="weapon-square">
          <Image
            src={weapon.displayIcon}
            alt="icon"
            width={300}
            height={0}
            className="displayIcon-weapon"
          />
          <p className="displayName-weapon">
            {weapon.displayName}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SideArms;
