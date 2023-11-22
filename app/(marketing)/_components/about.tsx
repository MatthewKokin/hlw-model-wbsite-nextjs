import React from 'react'
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
  return (
    <div>
        <div>
        <Card>
            <CardHeader>
                <CardTitle>Matthew K</CardTitle>
                <CardDescription>CFO</CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                src="/icon.jpeg"
                alt="Logo"
                height={440}
                width={440}
                className=""
                />
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>
    </div>
  )
}

export default About