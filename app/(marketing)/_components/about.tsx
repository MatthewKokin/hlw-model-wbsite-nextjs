import React from 'react'
import "../../../styles/about.css";
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function About() {
    // Define your data array
    const teamMembers = [
        { name: "Matthew", title: "Financial Adviser​", icon: "/mat_icon.png"},
        { name: "Josie", title: "Environmental Adviser​", icon: "/josie_icon.png"},
        { name: "Will", title: "Scientific Advisor​​", icon: "/will_icon.png"},
        { name: "Chloe", title: "Scientific Advisor​​", icon: "/chloe_icon.png"},
        { name: "Will", title: "Strategy Advisor​​", icon: "/hymaria_icon.png"},
    ];

    return (
        <div className='about-container'>
            <h1>Who we are?</h1>
            <div className='cards'>
                {teamMembers.map(member => (
                    <div className='card' key={member.name}>
                        <Card>
                            <CardHeader>
                                <CardTitle>{member.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src={member.icon}
                                    alt="Logo"
                                    height={120}
                                    width={120}
                                    className="img"
                                />
                                <p>{member.title}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About;
