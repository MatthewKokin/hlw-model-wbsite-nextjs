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
  return (
    <div className='about-container'>
        <h1>Who we are?</h1>
        <div className='cards'>
        <div className='card'>
        <Card>
            <CardHeader>
                <CardTitle>Matthew K</CardTitle>
                <CardDescription>CFO</CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                src="/icon.jpeg"
                alt="Logo"
                height={100}
                width={100}
                className=""
                />
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>
        <div className='card'>
        <Card>
            <CardHeader>
                <CardTitle>Matthew K</CardTitle>
                <CardDescription>CFO</CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                src="/icon.jpeg"
                alt="Logo"
                height={100}
                width={100}
                className=""
                />
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>
        <div className='card'>
        <Card>
            <CardHeader>
                <CardTitle>Matthew K</CardTitle>
                <CardDescription>CFO</CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                src="/icon.jpeg"
                alt="Logo"
                height={100}
                width={100}
                className=""
                />
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>
        <div className='card'>
        <Card>
            <CardHeader>
                <CardTitle>Matthew K</CardTitle>
                <CardDescription>CFO</CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                src="/icon.jpeg"
                alt="Logo"
                height={100}
                width={100}
                className=""
                />
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>
        <div className='card'>
        <Card>
            <CardHeader>
                <CardTitle>Matthew K</CardTitle>
                <CardDescription>CFO</CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                src="/icon.jpeg"
                alt="Logo"
                height={100}
                width={100}
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
        
    </div>
  )
}

export default About