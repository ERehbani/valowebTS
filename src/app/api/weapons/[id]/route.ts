import axios from "axios";
import { Weapon } from "../interface";
import { NextResponse } from "next/server";

interface Params {
    params: { id: string}
}

export async function GET(request:Request, {params}: Params) {
    console.log(params)
    try {
        const response = await axios(`https://valorant-api.com/v1/weapons/${params.id}`)
        const item = response.data.data
        const data: Weapon = {
            uuid: item.uuid,
            displayName: item.displayName,
            category: item.category,
            displayIcon: item.displayIcon,
            weaponStats: item.weaponStats,
            damageRanges: item.damageRanges,
            shopData: item.shopData,
            skins: item.skins
        }
        return NextResponse.json(data)
    } catch (error) {
        console.log(error)
    }
}