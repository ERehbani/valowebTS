"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import { Weapon } from "../api/weapons/interface";
import Image from "next/image";
import Link from "next/link";

function Weapons() {
  const [weapons, setWeapons] = useState<Weapon[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/weapons");
        const data = await response.json();
        setWeapons(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  console.log(weapons);

  return (
    <div>
      <div className="grid-weapons">
        {Array.isArray(weapons) &&
          weapons.map((item, index) => (
            <div className="weapons-container" key={index}>
              <Link href={`weapons/${item.uuid}`}>
              <div className="my-atropos" >
                <div className="atropos-container">
                  <p className="text-weapon text-white">{item.displayName}</p>
                  <Image
                    className="image-weapon"
                    src={item.displayIcon}
                    alt="icon"
                    width={200}
                    height={0}
                    
                  />
                </div>
              </div></Link>
             

            </div>
          ))}
      </div>
    </div>
  );
}

export default Weapons;
