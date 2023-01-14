import Image from "next/image"

export default function Navbar() {
    return (
        <nav className='nav'>
            <div className="nav-right">
                <Image src='/react.png' className='logo' width='40' height='40' alt='logo'></Image>
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}