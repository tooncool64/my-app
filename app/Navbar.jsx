import Link from 'next/link'
import './globals.css'

export default function Navbar() {
    return (
        <nav>
            <span>Projects</span>
            <div className='dropdown-content'>
                <Link href={'./first-project/'}>First Project</Link>
            </div>
        </nav>
    )
}
