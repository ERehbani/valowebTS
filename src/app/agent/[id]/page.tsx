"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Detail({ params }: { params: { id: string } }) {
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

  const [agent, setAgent] = useState<Agent | null>(null);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const { data } = await axios(
          `http://localhost:3000/api/agents/${params.id}`
        );
        setAgent(data);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetail();
  }, []);
  return (
    <div>
      <div className="">
        <div className="absolute z-[-10]">
          {agent?.background && (
            <Image
              src={agent.background}
              alt="background"
              width={500}
              height={0}
              
            />
          )}
        </div>
        <div className="z-10">
          {agent?.agentPortrait && (
            <Image
              src={agent.agentPortrait}
              alt="agentPortrait"
              width={600}
              height={0}
            />
          )}
        </div>
      </div>
      <div>{agent?.agentName}</div>
    </div>
  );
}

export default Detail;
