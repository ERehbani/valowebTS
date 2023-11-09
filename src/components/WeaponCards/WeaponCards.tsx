import React, { useState } from "react";
import "./globals.css";
import { Weapon } from "@/app/api/weapons/interface";
import SideArms from "./categories/SideArms";
import Smgs from "./categories/Smgs";
import Shotguns from "./categories/Shotguns";
import Rifles from "./categories/Rifles";
import SniperRifles from "./categories/SniperRifles";
import HeavyWeapons from "./categories/HeavyWeapons";

export interface WeaponProp {
  item: Weapon[];
}

const WeaponCards: React.FC<WeaponProp> = ({ item }) => {

  console.log(item)
  const filterWeapons = (category: string) => {
    return item.filter(
      (weapon) => weapon.shopData && weapon.shopData.category === category
    );
  };
  
  const pistols = filterWeapons("Pistols");
  const smgs = filterWeapons("SMGs");
  const shotguns = filterWeapons("Shotguns");
  const rifles = filterWeapons("Rifles");
  const sniperRifles = filterWeapons("Sniper Rifles");
  const heavyWeapons = filterWeapons("Heavy Weapons");
  

  return (
    <div>
      <div className="w-[150%] flex justify-around border border-red-600">
        <div>
          {pistols.map((weapon, index) => (
            <SideArms weapon={weapon} key={index} />
          ))}
        </div>
        <div>
          <div>
          {smgs.map((weapon, index) => (
            <Smgs weapon={weapon} key={index} />
          ))}
          </div>
          <div>
            {shotguns.map((weapon, index) => (
              <Shotguns weapon={weapon} key={index}/>
            ))}
          </div>
        </div>
        <div>
          {
            rifles.map((weapon, index) => (
              <Rifles weapon={weapon} key={index} />
            ))
          }
        </div>
        <div>
          {
            sniperRifles.map((weapon, index) => (
              <SniperRifles weapon={weapon} key={index} />
            ))
          }
          {heavyWeapons.map((weapon, index) => (
              <HeavyWeapons weapon={weapon} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WeaponCards;
