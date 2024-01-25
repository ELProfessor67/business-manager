import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/Header'
import { ClerkProvider } from '@clerk/nextjs'
import Footer from '@/components/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manage Business',
  description: 'Manage your business with us',
}

export default function RootLayout({ children }) {
  
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
        <link rel="icon" type="image/png" href="/images/logo-2.png"/>
        </head>
        
      <body className={inter.className}>
        
        <Header/>
        {children}
        <Footer/>
        
      </body>  
      </html>
    </ClerkProvider>
  )
}
