"use client"

import { useEffect } from 'react'
import { Lato } from 'next/font/google'
import { usePathname } from "next/navigation";
import NavbarComponent from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import './globals.scss'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require('bootstrap/dist/js/bootstrap.js')
    }
  }, [])
  const pathname = usePathname();

  return (
    <html lang="es">
      <head>
        <title>Los Perritos del Palomar Refugio</title>
      </head>
      <body className={lato.className}>
        {<NavbarComponent></NavbarComponent>}
        <main className={`${pathname == "/" ? "" : "py-5"}`.trim()}>
          {children}
        </main>
        {<Footer></Footer>}
      </body>
    </html>
  )
}
