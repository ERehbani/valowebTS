import { NextResponse } from "next/server";
import { Weapon } from "./interface";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios('https://valorant-api.com/v1/weapons')
    const data = response.data.data.map((item: Weapon) => ({
        uuid: item.uuid,
        displayName: item.displayName.toUpperCase(),
        category: item.category,
        displayIcon: item.displayIcon,
        weaponStats: item.weaponStats,
        damageRanges: item.damageRanges,
        shopData: item.shopData,
        skins: item.skins
    }))

    return new NextResponse(JSON.stringify(data))
} catch (error) {
    console.log(error);
  }
}
