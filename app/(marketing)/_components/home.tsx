import React from 'react'
import "../../../styles/home.css";
import Image from 'next/image';
export function Home() {
  return (
    <div className='home-container'>
      <div className='container-mission-image'>
        <div className='mission'>
            <h1>Nuclear Waste Management</h1>
            <h1>Starts Here: UK path to a</h1>
            <h1>more sustainable HLW</h1>
            <h1>management</h1>
          <div className='container-img'>
          <Image
              src="/infographic.svg"
              alt="Logo"
              height={440}
              width={440}
              className="img"
              />
          </div>
          <div className='container-button'>
            <button>See Economic Model</button>
          </div>
        </div>
        
        </div>
    </div>
  )
}