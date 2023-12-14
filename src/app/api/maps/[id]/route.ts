import axios from "axios";
import { NextResponse } from "next/server";
import { Maps } from "../interface";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  console.log(params.id);
  try {
    const response = await axios(
      `https://valorant-api.com/v1/maps/${params.id}`
    );
    const item = response.data.data;
    const data: Maps = {
      uuid: item.uuid,
      displayName: item.displayName,
      narrativeDescription: item.narrativeDescription,
      displayIcon: item.displayIcon,
      splash: item.splash,
      assetPath: item.assetPath,
      callouts: item.callouts
        ? item.callouts.map(
            (callout: { regionName: string; superRegionName: string }) => ({
              regionName: callout.regionName,
              superRegionName: callout.superRegionName,
            })
          )
        : [],
    };
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return new NextResponse("Error occurred");
  }
}
