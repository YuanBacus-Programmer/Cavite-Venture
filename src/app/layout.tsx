'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import localFont from "next/font/local"
import "./globals.css"
import Header from "@/components/Landingpage/Header"
import { LoadingAnimation } from './LoadingAnimation'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Adjust this time as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatePresence>
          {isLoading ? (
            <LoadingAnimation key="loading" />
          ) : (
            <>
              <Header />
              {children}
            </>
          )}
        </AnimatePresence>
      </body>
    </html>
  )
}