import axios from "axios";
import { Maps } from "./interface";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const response = await axios("https://valorant-api.com/v1/maps");
      const data = response.data.data.map(
        (item: Maps) => ({
          uuid: item.uuid,
          displayName: item.displayName,
          narrativeDescription: item.narrativeDescription,
          displayIcon: item.displayIcon,
          splash: item.splash,
          assetPath: item.assetPath,
          callouts: item.callouts ?item.callouts.map(callout => ({
            regionName: callout.regionName,
            superRegionName: callout.superRegionName
          })) : [],
        })
      );
      return new NextResponse(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }
  