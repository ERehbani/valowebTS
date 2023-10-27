"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./globals.css";

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
      <div className="head-container">
        <div className="image-container">
          <div className="background-container">
            {agent?.background && (
              <Image
                src={agent.background}
                alt="background"
                width={550}
                height={0}
              />
            )}
          </div>
          <div className="portrait-container">
            {agent?.agentPortrait && (
              <Image
                src={agent.agentPortrait}
                alt="agentPortrait"
                width={650}
                height={0}
              />
            )}
          </div>
        </div>
        <div className="info-container">
          <div className="agentName text-white">
            <h2 className="flex">
              {agent?.agentName} - {agent?.role.displayName} <Image className="object-contain ml-3" src={agent?.role.displayIcon} alt="displayIcon" width={20} height={0}/>
            </h2>
          </div>
          <div>
            <p className=" text-white font-light">{agent?.developerName}</p>
          </div>
          <div className="description text-white">
            <p>{agent?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
