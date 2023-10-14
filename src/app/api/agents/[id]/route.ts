import axios from "axios"
import { NextResponse } from "next/server"
import { Agente } from "../route"

interface Params {
    params: { id: string}
}

export async function GET(request: Request, {params}: Params) {
    console.log(params)
    const response = await axios(`https://valorant-api.com/v1/agents/${params.id}`)
    const item = response.data.data
    const data: Agente = {
        agentUuid: item.uuid,
        agentName: item.displayName,
        description: item.description,
        developerName: item.developerName,
        icon: item.displayIcon,
        agentPortrait: item.bustPortrait,
        background: item.background,
        role: item.role,
        abilities: item.abilities,
        voceLine: item.voiceLine
    }

    return NextResponse.json(data)
}