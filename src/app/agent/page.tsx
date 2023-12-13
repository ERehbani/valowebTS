"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./globals.css";
import AgentCards from "@/components/AgentCards/AgentCards";
import { Progress } from "@nextui-org/react";
import AgentsLoader from "@/components/Loader/Loader";

export default function Home() {
  type Agent = {
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
  };

  const [data, setData] = useState<Agent[]>([]);

  // useEffect(() => {
  //   const consultInfo = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/api/agents");
  //       const data = await response.json();
  //       if (Array.isArray(data)) {
  //         setData(data);
  //       } else {
  //         console.error("Data is not an array:", data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   consultInfo();
  // }, []);

  console.log(data);

  return (
    <div>
      <div className="grid-agents">
        {" "}
        {/* Añadir las clases de CSS Grid aquí */}
        {data.length > 0 ? (
          data.map((item, index) => <AgentCards item={item} key={index} />)
        ) : (
          <AgentsLoader/>
        )}
      </div>
    </div>
  );
}
