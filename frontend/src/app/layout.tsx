import { Header } from '@/components/Header'
import './globals.css'
import { League_Spartan } from 'next/font/google'

const inter = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='max-w-6xl mx-auto py-10'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
