import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/footer'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '진또베이',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  
    <html lang="en">

      <body className={inter.className}>
        <div>
            <Header/>
            {children}  
            <Footer/>
        </div>
      </body>
      {/* {children} */}
    </html>
  )
}
