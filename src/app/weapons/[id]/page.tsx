"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./globals.css";

function WeaponDetail({ params }: { params: { id: string } }) {
  type Weapon = {
    uuid: string;
    displayName: string;
    category: string;
    contentTierUuid: string;
    displayIcon: string;
    weaponStats: {
      fireRate: number;
      magazineSize: number;
      equipTimeSeconds: number;
      reloadTimeSeconds: number;
    };
    damageRanges: [
      {
        rangeStartMeters: number;
        headDamage: number;
        bodyDamage: number;
        legDamage: number;
      },
      {
        rangeStartMeters: number;
        headDamage: number;
        bodyDamage: number;
        legDamage: number;
      }
    ];
    shopData: {
      cost: number;
      category: string;
      newImage: string;
    };
    skins: [
      {
        contentTierUuid: string;
        uuid: string;
        displayName: string;
        displayIcon: string;
        chromas: [
          {
            uuid: string;
            displayName: string;
            fullRender: string;
            streamedVideo: string | null;
          }
        ];
        levels: [
          {
            uuid: string;
            displayName: string;
            displayIcon: string;
            streamedVideo: string | null;
          }
        ];
      }
    ];
  };

  const [weapon, setWeapon] = useState<Weapon | null>(null);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const { data } = await axios(
          `http://localhost:3000/api/weapons/${params.id}`
        );
        console.log(data);
        setWeapon(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetail();
  }, []);

  console.log(weapon);
  return (
    <div>
      <div>
        {weapon && weapon.displayIcon && (
          <Image
            src={weapon.displayIcon || "/Valorant_default.png"}
            alt="icon"
            width={450}
            height={0}
          />
        )}
        <h2 className="text-white">{weapon?.displayName}</h2>

        <div className="skins-container">
          {weapon?.skins
            .filter(
              (skin) =>
                skin.displayIcon !== null && skin.contentTierUuid !== null
            )
            .map((skin) => {
              return (
                <div key={skin.uuid}>
                  <div className="image-skin-container">
                    <Image
                      src={skin.displayIcon}
                      alt="skin icon"
                      width={150}
                      height={0}
                      className="image-skin"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default WeaponDetail;
