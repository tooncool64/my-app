import Image from "next/image"

export default function Navbar() {
    return (
    <div>
        <nav className='nav'>
            <Image src='/react.png' className='logo' width='40' height='40' alt='logo'></Image>
            <h3>Lorem ipsum</h3>
            <h4>Lorem Ipsum</h4>
        </nav>
    </div>
    )
}