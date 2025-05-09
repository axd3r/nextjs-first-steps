import Link from "next/link"
import {HomeIcon} from '@primer/octicons-react'
import ActiveLink from "../active-link/ActiveLink"

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },
]

const Navbar = async () => {
  return (
    <nav className="flex bg-blue-950 bg-opacity-30 p-2 m-2 rounded items-center">
      <Link href={'/'} className="flex items-center">
        <HomeIcon size={16} className="mr-2"/>
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      <div className="flex gap-4 items-center">
        {
          navItems.map(navItem => (
            <ActiveLink key={navItem.path} {...navItem} />
          ))
        }
      </div>
    </nav>
  );
}


export default Navbar
