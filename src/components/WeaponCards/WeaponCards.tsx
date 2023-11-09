import React, { useState } from "react";
import "./globals.css";
import { Weapon } from "@/app/api/weapons/interface";
import SideArms from "./categories/SideArms";
import Smgs from "./categories/Smgs";
import Shotguns from "./categories/Shotguns";
import Rifles from "./categories/Rifles";
import SniperRifles from "./categories/SniperRifles";
import HeavyWeapons from "./categories/HeavyWeapons";
import Melee from "./categories/Melee";

export interface WeaponProp {
  item: Weapon[];
}

const WeaponCards: React.FC<WeaponProp> = ({ item }) => {
  console.log(item);

  const filterWeapons = (category: string) => {
    if(category === "MELEE") {
      return item.filter(
        (weapon) => weapon.displayName === category
      )
    }
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
  const melee = filterWeapons("MELEE");

  return (
    <div>
      <div className="w-[100%] flex justify-around border border-red-600">
        <div>
          <h2 className="category-title">SIDEARMS</h2>
          {pistols.map((weapon, index) => (
            <SideArms weapon={weapon} key={index} />
          ))}
        </div>
        <div>
          <div>
            <h2 className="category-title">SMGs</h2>
            {smgs.map((weapon, index) => (
              <Smgs weapon={weapon} key={index} />
            ))}
          </div>
          <div>
            <h2 className="category-title">SHOTGUNS</h2>
            {shotguns.map((weapon, index) => (
              <Shotguns weapon={weapon} key={index} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="category-title">RIFLES</h2>
          {rifles.map((weapon, index) => (
            <Rifles weapon={weapon} key={index} />
          ))}
        </div>
        <div>
          <h2 className="category-title">SNIPER RIFLES</h2>
          {sniperRifles.map((weapon, index) => (
            <SniperRifles weapon={weapon} key={index} />
          ))}
          <h2 className="category-title">HEAVY WEAPONS</h2>
          {heavyWeapons.map((weapon, index) => (
            <HeavyWeapons weapon={weapon} key={index} />
          ))}
         
            <h2 className="category-title">MELEE</h2>
        {melee.map((weapon, index) => (
            <Melee weapon={weapon} key={index} />
          ))}
                 
        </div>
      </div>
    </div>
  );
};

export default WeaponCards;
