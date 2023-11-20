import { Logo } from "@/components/logo"
import "../../../styles/navbar.css";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"




export function Navbar() {
  return (
    <div className="navbar">
        <Logo/>
      <div className="menu-bar md:hidden">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Menu</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Home</MenubarItem>
              <MenubarItem>About Us</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Our Proposal</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Economic Model</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="hidden md:flex flex-row pages justify-around">
          <div>Home</div>
          <div>About Us</div>
          <div>Our Proposal</div>
          <div>Economic Model</div>
        </div>
    </div>
  )
}