import { Skins } from "@/app/weapons/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import './globals.css'

function MatchSkins({matchSkin}: {matchSkin: Skins[]}) {

  const redirectWeapon = (displayName: string, assetPath: string) => {
    if(displayName.includes("Odin")) return "/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584"
    if(displayName.includes("Ares")) return '/weapons/55d8a0f4-4274-ca67-fe2c-06ab45efdf58'
    if(displayName.includes("Vandal")) return '/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872'
    if(displayName.includes("Bulldog")) return '/weapons/ae3de142-4d85-2547-dd26-4e90bed35cf7'
    if(displayName.includes("Phantom")) return '/weapons/ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a'
    if(displayName.includes("Judge")) return "/weapons/ec845bf4-4f79-ddda-a3da-0db3774b2794"
    if(displayName.includes("Bucky")) return '/weapons/910be174-449b-c412-ab22-d0873436b21b'
    if(displayName.includes("Frenzy")) return '/weapons/44d4e95c-4157-0037-81b2-17841bf2e8e3'
    if(displayName.includes("Classic")) return '/weapons/29a0cfab-485b-f5d5-779a-b59f85e204a8'
    if(displayName.includes("Ghost")) return '/weapons/1baa85b4-4c70-1284-64bb-6481dfc3bb4e'
    if(displayName.includes("Sheriff")) return '/weapons/e336c6b8-418d-9340-d77f-7a9e4cfe0702'
    if(displayName.includes("Shorty")) return '/weapons/42da8ccc-40d5-affc-beec-15aa47b42eda'
    if(displayName.includes("Operator")) return '/weapons/a03b24d3-4319-996d-0f8c-94bbfba1dfc7'
    if(displayName.includes("Guardian")) return '/weapons/4ade7faa-4cf1-8376-95ef-39884480959b'
    if(displayName.includes("Marshal")) return '/weapons/c4883e50-4494-202c-3ec3-6b8a9284f00b'
    if(displayName.includes("Spectre")) return '/weapons/462080d1-4035-2937-7c09-27aa2a5c27a7'
    if(displayName.includes("Stringer")) return '/weapons/f7e1b454-4ad4-1063-ec0a-159e56b58941'
    if(assetPath.includes( "Melee" )) return '/weapons/2f59173c-4bed-b6c3-2191-dea9b58be9c7'
    
    
  }
  return (
    <div>
      <div className="flex justify-center">
        {matchSkin
          ?.filter(
            (skin) => skin.displayIcon !== null && skin.contentTierUuid !== null
          )
          .map((skin, index) => {
            return (
              <div key={index} className="mx-5" >
                <Link href={redirectWeapon(skin.displayName, skin.assetPath) || ''}>
                  <div className="match-skin">
                    <Image
                      src={skin.displayIcon}
                      alt="match skin"
                      width={200}
                      height={0}
                      className="image-skin-current"
                    />
                    <p className="text-white">{skin.displayName}</p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MatchSkins;
