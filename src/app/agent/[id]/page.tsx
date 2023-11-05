"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./globals.css";
import "./globals.css";
import ReactPlayer from "react-player";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import AgentCards from "@/components/AgentCards/AgentCards";

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
  const [role, setRole] = useState<Agent | null>(null);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const { data } = await axios(
          `http://localhost:3000/api/agents/${params.id}`
        );
        setAgent(data);
        getAgentsRole(data.role.displayName);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getAgentsRole = async (roleName: string) => {
      try {
        const { data } = await axios("http://localhost:3000/api/agents");
        console.log(data);
        const filterRole = data.filter(
          (agent: { role: { displayName: string } }) =>
            agent.role.displayName === roleName
        );
        console.log(filterRole);
        setRole(filterRole);
      } catch (error) {
        console.log(error);
      }
    };
    getDetail();
  }, []);

  console.log(agent);

  const hasPasive = (agent: string, ability: string): string => {
    if (ability === "Passive" || !ability) {
      return "/Valorant_videos/Jett-Valorant.mp4";
    }
    return `/Valorant_videos/${agent}/${ability}.mp4`;
  };

  return (
    <div className="w-[80%] my-0 mx-auto">
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
            </div>
          </div>
        </div>
        <div className="abilities-player">
          <div className="abilities-container">
            <Tabs
              variant="bordered"
              size="lg"
              color="secondary"
              className="flex justify-center">
              {agent?.abilities.map((item: Ability, index: number) => (
                <Tab
                  key={index}
                  className="h-20"
                  title={
                    <div onClick={(e) => e.preventDefault()} className="">
                      <Image
                        src={item.displayIcon}
                        alt="icon"
                        width={100}
                        height={0}
                        className="z-10 mx-5 object-contain aspect-[3/2]"
                      />
                    </div>
                  }>
                  <Card>
                    <CardBody>
                      <div className="abilities-info">
                        <div className="abilities-info-p">
                          <p className="ability-name">{item.displayName}</p>
                          <p className="ability-description">
                            {item.description}
                          </p>
                        </div>
                        <ReactPlayer
                          url={`${hasPasive(agent?.agentName, item.slot)}`}
                          classname="react-player"
                          playing
                          loop
                          muted
                        />
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
        <div className="more-container mt-96">
          <div className="w-[80%] my-0 mx-auto">
            <div className="more-role">
              <p className="more-role-text text-white"> More {agent?.role.displayName}</p>
              <Image
                  className="object-contain ml-3"
                  src={agent?.role.displayIcon}
                  alt="displayIcon"
                  width={20}
                  height={0}
                />
            </div>
            <div className="role-agents">
              <div className="role-agents-container">
                {Array.isArray(role) &&
                  role.map((item, index) => (
                    <AgentCards item={item} key={index} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
