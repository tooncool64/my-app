import HeroContent from "./Hero"
import Navbar from "./Navbar"
import Card from "./Card"
import './style.css'

export default function AirBNBClone() {
    return (
        <div>
            <Navbar />
            <HeroContent />
            <Card />
        </div>
    )
}