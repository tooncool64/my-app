import Image from "next/image";
import AirBNBLogo from "public/airbnb-logo.png"

export default function Navbar() {
    return (
        <div className="image">
            <Image src={AirBNBLogo} height='50'></Image>
        </div>
    )
}