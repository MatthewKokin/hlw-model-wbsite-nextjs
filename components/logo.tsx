import Image from "next/image"
import Link from "next/link"
import "../styles/logo.css";

export const Logo = () => {
  return (
        <Link href='/'>
            <div className=" logo-el last:hover:placeholder-opacity-75 transition">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    height={75}
                    width={75}
                    className="m-0"
                />
                <div className="text flex flex-col">
                    <p>AtomGuard</p>
                    <p>Innovations</p>
                </div>
                
            </div>
        </Link>
  )
}