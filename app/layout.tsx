import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Social Media Dashboard | Adam Richard Turner",
  description:
    "A social media dashboard project utilizing Next.js and TailwindCSS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} bg-background-color`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
