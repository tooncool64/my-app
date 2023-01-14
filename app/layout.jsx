import {Inter} from '@next/font/google'
import './globals.css'

const inter = Inter({
  weight : ['700', '600', '400'],
  subsets : ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  )
}