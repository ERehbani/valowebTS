"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import { Weapon } from "../api/weapons/interface";
import Image from "next/image";
import Link from "next/link";
import WeaponCards from "@/components/WeaponCards/WeaponCards";
import { Progress } from "@nextui-org/react";
import Loader from "@/components/Loader/Loader";
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


  // ...
return (
  <div>
    <div className="grid-weapons">       
      {weapons.length > 0 ? (
        <WeaponCards item={weapons} />
      ) : (
       <Loader image="/weapon_loader.webp"/>
      )}
    </div>
  </div>
);
// ...

}

export default Weapons;
