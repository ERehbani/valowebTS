import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './globals.css'

function AgentCards({item}) {
  return (
    <div className='card-agent'>
    <div className='card-container'>
       <div>
         <Image className='image-agent' src={item.icon} alt='agent icon' width={200} height={0}/>
       </div>

       <Link href={`/agents/${item.agentUuid}`} >
         <div className='name-container'>
        <div className='role-icon-container'>
        <Image className='role-icon' src={item.role.displayIcon} alt='icon' width={20} height={0}/>
        </div>
         <p className='name-agent'>{item.agentName}</p>
         </div>
       </Link>
     </div>
   </div>
  )
}

export default AgentCards