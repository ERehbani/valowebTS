import axios from "axios";
import { NextResponse } from "next/server";

export interface Agente {
    agentUuid: string;
    agentName: string;
    description: string;
    developerName: string;
    icon: string;
    agentPortrait: string;
    background: string;
    role: any;
    abilities: any; 
    voceLine: string;
  }

export async function GET(){
    try {
        const response = await axios('https://valorant-api.com/v1/agents');
        const data = response.data.data
            .filter((item: any) => item.isPlayableCharacter) // Filtrar solo los agentes jugables
            .map((item: any): Agente => ({
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
            }))
        return new NextResponse(JSON.stringify(data))
    } catch (error: any) {
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
