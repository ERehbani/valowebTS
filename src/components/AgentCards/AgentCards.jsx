import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./globals.css";

function AgentCards({ item }) {
  return (
    <div className="card-agent">
      <div className="card-container">
          <Image
            className="image-agent"
            src={item.icon}
            alt="agent icon"
            width={175}
            height={0}
          />

        <Link href={`/agent/${item.agentUuid}`}>
          <div className="name-container">
            <div className="role-icon-container">
              <Image
                className="role-icon"
                src={item.role.displayIcon}
                alt="icon"
                width={20}
                height={0}
              />
            </div>
            <p className="name-agent">{item.agentName}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AgentCards;
