import Image from "next/image"

export default function Header() {
    return (
    <header>
        <nav className='nav'>
            <Image src='/react.png' className='logo' width='40' height='40' alt='logo'></Image>
            <ul className='nav-items'>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul> 
        </nav>
    </header>
    )
}