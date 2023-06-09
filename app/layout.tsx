import './globals.css'
import {IBM_Plex_Sans} from '@next/font/google'
import {IBM_Plex_Mono} from '@next/font/google'
import {Silkscreen} from '@next/font/google'
import Nav from './components/nav'

export const metadata = {
  title: 'Jusi Monteiro | Full Stack Developer',
  description: 'I help businesses turn their vision into software.',
}

const plexSans = IBM_Plex_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-plex-sans",
})

const plexMono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
})

const silkscreen = Silkscreen({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-silkscreen",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en" className={`${plexMono.variable} ${plexSans.variable} ${silkscreen.variable}`}>
      <body className='bg-neutral-900 h-screen p-4 flex flex-col items-center font-display'>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
