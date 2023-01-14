import Link from 'next/link'
import './globals.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link href={'/first-project/'}>First Project</Link>
            <Link href={'/second-project/'}>Second Project</Link>
            <span>About</span>
            <span>Contact</span>
        </nav>
    )
}