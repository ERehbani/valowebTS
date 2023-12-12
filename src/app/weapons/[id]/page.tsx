"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./globals.css";
import LevelsPlayer from "@/components/LevelsPlayer/LevelsPlayer";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MatchSkins from "@/components/MatchSkins/MatchSkins";
import { Levels, Skins, Weapon } from "../interface";
import { ScrollShadow } from "@nextui-org/react";



function WeaponDetail({ params }: { params: { id: string } }) {

  type Level = Levels[];

  const [currentSkin, setCurrentSkin] = useState<string | null>("");
  const [chromas, setChromas] = useState<Skins | null>();
  const [levels, setLevels] = useState<Level | null>();
  const [weapon, setWeapon] = useState<Weapon | null>(null);
  const [currentName, setCurrentName] = useState<string | null>("");
  const [catalog, setCatalog] = useState<Weapon[] | null>();
  const [matchSkin, setMatchSkin] = useState<Skins[]>([]);

  const router = useRouter()

  useEffect(() => {
    const getDetail = async () => {
      try {
        const { data } = await axios(
          `http://localhost:3000/api/weapons/${params.id}`
        );
        console.log(data);
        setWeapon(data);
        setCurrentName(data.displayName);
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
  }, [params.id]);

  const findMatchingSkins = (themeUuid: string | null): Skins[] | null => {
    if (!catalog || !themeUuid) {
      return null;
    }

    const matchingSkins: Skins[] = [];

    catalog.forEach((weapon) => {
      if (weapon && weapon.skins && weapon.skins.length > 0) {
        const matchingWeaponSkins = weapon.skins.filter(
          (skin) => skin.themeUuid === themeUuid
        );

        matchingSkins.push(...matchingWeaponSkins);
      }
    });

    console.log(weapon);
    setMatchSkin(matchingSkins);
    return matchingSkins.length > 0 ? matchingSkins : null;
  };

  const changeSkin = (
    skin: string,
    uuid: string | null,
    themeUuid: string | null,
    displayName: string | null
  ) => {
    setCurrentSkin(skin);

    const matchingSkins = findMatchingSkins(themeUuid);

    if (matchingSkins) {
      console.log("Skins encontrados:", matchingSkins);
    }
    const filterWeapon = weapon
      ? weapon.skins.find((skin) => skin.uuid === uuid)
      : null;
    setLevels(filterWeapon?.levels);
    setChromas(filterWeapon);
    setCurrentName(displayName || "");
  };

  console.log(matchSkin);

  const changeChroma = (chroma: string) => {
    setCurrentSkin(chroma);
  };

  return (
    <div>
      <div>
        {weapon && weapon.displayIcon && (
          <div className="current-weapon">
            <div className="current-weapon-content">
            <h2 className="current-weapon-title">{currentName}</h2>
            <div className="flex">
              <div className=" mx-auto">
                {weapon && weapon.displayIcon && (
                  <Image
                    src={currentSkin || weapon.displayIcon}
                    alt="icon"
                    width={500}
                    height={300}
                    className="image-skin-current"
                  />
                )}
              </div>
              <div className="h-[260px]">
                {levels?.map((level, index) => {
                  return (
                    <div key={index} className="levels-player">
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
          </div>
        )}

        <ScrollShadow hideScrollBar className="skins-container">
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
                      changeSkin(
                        skin.displayIcon,
                        skin.uuid,
                        skin.themeUuid,
                        skin.displayName
                      );
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

        </ScrollShadow>

        <div className="py-20">
          <h2 className="text-white">Matching Skins</h2>
          <div className="flex justify-center">
              <MatchSkins matchSkin={matchSkin}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeaponDetail;
