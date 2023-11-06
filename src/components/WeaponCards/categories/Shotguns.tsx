import { Weapon } from '@/app/api/weapons/interface';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ShotgunProps {
    weapon: Weapon; // Cambia 'item' por 'weapon' y haz que sea un objeto 'Weapon'
  }

const Shotguns: React.FC<ShotgunProps> = ({ weapon }) => {

    console.log(weapon)
  return (
    <div>
       <Link href={`/weapons/${weapon.uuid}`}>
       <div className="my-10 bg-[#2e4659] w-[270px]">
        <Image src={weapon.displayIcon} alt="icon" width={200} height={0} className="mx-auto p-5"/>
        <p className="text-white bg-[#425366] flex justify-center mt-5 font-normal">{weapon.displayName}</p>
        </div>
        </Link>
      </div>
  )
}

export default Shotguns
