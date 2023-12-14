import React from 'react'
import './globals.css'
import Image from 'next/image'
import { Progress } from '@nextui-org/react'

function Loader({image}:{image: string}) {
  return (
    <div className="loader-container">
            <Image
              src={image}
              alt="loader"
              width={1000}
              height={0}
            />
            <Progress
              size="sm"
              isIndeterminate
              aria-label="Loading..."
              className="max-w-md mt-10"
            />
          </div>
  )
}

export default Loader
