import React from 'react'
import "../../../styles/home.css";
import Image from 'next/image';
export function Home() {
  return (
    <div>
      <div className='container-mission-image'>
        <div className='mission'>
            <h1>Nuclear Waste Management</h1>
            <h1>Starts Here: UK path to a</h1>
            <h1>more sustainable HLW</h1>
            <h1>management</h1>
        </div>
        
        <Image
            src="/infographic.svg"
            alt="Logo"
            height={1000}
            width={1000}
            className="m-0 img"
            />
      </div>
        <div className='container-button'>
          <button>See Economic Model</button>
        </div>
    </div>
  )
}