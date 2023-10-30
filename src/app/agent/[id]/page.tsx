"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./globals.css";
import "./globals.css";
import ReactPlayer from "react-player";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";

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
    abilities: Ability[];
    voceLine: string;
  };

  type Ability = {
    description: string;
    displayIcon: string;
    displayName: string;
    slot: string;
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

  console.log(agent);

  const hasPasive = (agent: string, ability: string): string => {
    if(ability === 'Passive') {
      return "/Valorant_videos/Jett-Valorant.mp4"
    }
    return `/Valorant_videos/${agent}/${ability}.mp4`
  }

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
              {agent?.agentName} - {agent?.role.displayName}{" "}
              <Image
                className="object-contain ml-3"
                src={agent?.role.displayIcon}
                alt="displayIcon"
                width={20}
                height={0}
              />
            </h2>
          </div>
          <div>
            <p className=" text-white font-light">{agent?.developerName}</p>
          </div>
          <div className="description text-white">
            <p>{agent?.description}</p>
            {/* <Image src="/Valorant_videos/Chamber/Rendezvous_Activation.jpg" width={2000} alt="chamba" height={0}/> */}
          </div>
          <ReactPlayer
            url={`/Valorant_videos/${agent?.agentName}/${agent?.agentName} Q.mp4`}
            playing
            loop
            muted
          />
        </div>
      </div>
      <Tabs variant="bordered" size="lg" color="secondary">
  {agent?.abilities.map((item: Ability, index: number) => (
    <Tab
      key={index}
      className="h-20"
      title={
        <div>
          <Image
            src={item.displayIcon}
            alt="icon"
            width={80}
            height={0}
            className="z-10 mx-5"
          />
        </div>
      }
    >
      <Card>
        <CardBody>
          <ReactPlayer url={`${hasPasive(agent?.agentName, item.slot)}`} playing loop muted/>
          {/* <ReactPlayer url={`/Valorant_videos/${agent?.agentName}/${hasPasive(item.slot)}.mp4`} playing loop muted/> */}
        </CardBody>
      </Card>
    </Tab>
  ))}
</Tabs>

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
