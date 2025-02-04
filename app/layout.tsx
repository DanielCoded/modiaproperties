import { libreFranklin, jetbrainsMono, poppins } from "./fonts"
import "./globals.css"
import { initEmailJS } from "@/lib/emailjs"
import type { Metadata } from "next"
import type React from "react" // Import React

export const metadata: Metadata = {
  title: "Modia Properties & Consultancy",
  description: "Your trusted real estate advisors",
  icons: {
    icon: "/favicon.ico",
  },
}

initEmailJS()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${libreFranklin.variable} ${jetbrainsMono.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

