"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./globals.css";
import ReactPlayer from "react-player";

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
      }
    ];
    levels: Levels[];
  };

  type Levels =
    {
      uuid: string;
      displayName: string;
      displayIcon: string;
      streamedVideo: string | null;
    }
  ;

  type Level = Levels[]

  const [currentSkin, setCurrentSkin] = useState("");
  const [chromas, setChromas] = useState<Skins | null>();
  const [levels, setLevels] = useState<Level | null>();
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

  const changeSkin = (skin: string, uuid: string | null) => {
    setCurrentSkin(skin);
    console.log(uuid);
    const filterWeapon = weapon?.skins.find((skin) => skin.uuid === uuid);
    setLevels(filterWeapon?.levels)
    setChromas(filterWeapon);
  };

  const changeChroma = (chroma: string) => {
    setCurrentSkin(chroma);
  };


  console.log(levels)

  return (
    <div>
      <div>
        {weapon && weapon.displayIcon && (
          <div className="current-weapon">
            <Image
              src={currentSkin || weapon.displayIcon}
              alt="icon"
              width={400}
              height={300}
              className="image-skin-current"
            />
          </div>
        )}
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
                ) : (
                  <Image
                    src="/block.svg"
                    alt="swatch"
                    className="block-swatch-image"
                    width={60}
                    height={0}
                  />
                )}
              </div>
            );
          })}

         <div>
          {levels?.map((level, index) => {
            return (
              <div key={index}>
                { level.streamedVideo && (
                  <ReactPlayer  url={level.streamedVideo}
                  classname="react-player"
                  playing
                  loop
                  muted/>
                  
                )}
              </div>
            )
          })}
         </div>
        </div>

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
                    onClick={() => changeSkin(skin.displayIcon, skin.uuid)}
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
