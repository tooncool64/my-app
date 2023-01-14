import Image from "next/image"

export default function InfoCard() {
    return (
        <div className="header">
            <div className="Image">
                <Image src='/reactbruh.jpg' width='317' height='317'></Image>
                <div className="info">React Bruh</div>
            </div>
        </div>
    )
}