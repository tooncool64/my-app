import { Poppins } from "@next/font/google"

const poppins = Poppins({
    weight: ['300', '600'],
    subsets: ['latin']
})

export default function Layout({children}) {
    return (
        <div className={poppins.className}>{children}</div>
    )
}