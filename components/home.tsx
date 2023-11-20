import React from 'react'
import "../styles/home.css";
import Image from 'next/image';
export function Home() {
  return (
    <div>
        <h1 className='mission'>Nuclear Waste Management Starts Here: UK path to a more sustainable HLW management</h1>
        <button>See Economic Model</button>
        <Image
                    src="/infographic2.svg"
                    alt="Logo"
                    height={1000}
                    width={1000}
                    className="m-0"
                />
        <div>

        </div>
    </div>
  )
}