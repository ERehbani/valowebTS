"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./globals.css";
import LevelsPlayer from "@/components/LevelsPlayer/LevelsPlayer";

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
    skins: Skins[];
  };

  type Skins = {
    contentTierUuid: string;
    uuid: string;
    displayName: string;
    displayIcon: string;
    chromas: [
      {
        uuid: string;
        displayName: string;
        fullRender: string;
        swatch: string;
        streamedVideo: string | null;
        contentTierUuid: string;
      }
    ];
    levels: Levels[];
  };

  type Levels = {
    uuid: string;
    displayName: string;
    levelItem: string;
    displayIcon: string;
    streamedVideo: string | null;
  };

  type Level = Levels[];

  const [currentSkin, setCurrentSkin] = useState("");
  const [chromas, setChromas] = useState<Skins | null>();
  const [levels, setLevels] = useState<Level | null>();
  const [weapon, setWeapon] = useState<Weapon | null>(null);
  const [catalog, setCatalog] = useState<Weapon[] | null>();
  const [theme, setTheme] = useState<Weapon[] | null>(null);

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
    const getTheme = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/weapons");
        const data = await response.json();
        setCatalog(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetail();
    getTheme();
  }, []);

  console.log(weapon);

  const changeSkin = (skin: string, uuid: string | null) => {
    setCurrentSkin(skin);
    const filterWeapon = weapon?.skins.find((skin) => skin.uuid === uuid);
    setLevels(filterWeapon?.levels);
    setChromas(filterWeapon);
  };

  const changeChroma = (chroma: string) => {
    setCurrentSkin(chroma);
  };

  return (
    <div>
      <div>
        {weapon && weapon.displayIcon && (
          <div className="current-weapon">
            <div className="flex justify-around">
              <div>
                <Image
                  src={currentSkin || weapon.displayIcon}
                  alt="icon"
                  width={400}
                  height={300}
                  className="image-skin-current"
                />
              </div>
              <div className="h-[260px]">
                {levels?.map((level, index) => {
                  return (
                    <div key={index} className="">
                      {level.streamedVideo ? (
                        <LevelsPlayer
                          streamVideo={level.streamedVideo}
                          levelItem={level.levelItem}
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="swatch-container">
              {chromas?.chromas.map((chroma, index) => {
                return (
                  <div
                    key={index}
                    className=""
                    onClick={() => changeChroma(chroma.fullRender)}>
                    {chroma.swatch ? (
                      <Image
                        src={chroma.swatch && chroma.swatch}
                        alt="swatch"
                        className="swatch-image"
                        width={60}
                        height={0}
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
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
                  <div
                    onClick={() => {
                      changeSkin(skin.displayIcon, skin.uuid);
                    }}
                    className="image-skin-container">
                    <Image
                      src={skin.displayIcon}
                      alt="skin icon"
                      width={200}
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
