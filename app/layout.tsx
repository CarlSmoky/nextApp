import './globals.css'
import Navbar from './components/Navbar/Navbar'
import Fotter from './components/Fotter'
import type { Metadata } from 'next'
import { childrenProps } from './types/Interfaces'
import { orbitron  } from './fonts'

export const metadata: Metadata = {
  title: {
    default: 'Momo gallary',
    template: '%s | Momo gallary'
  },
  description: 'Artist & Dancer Noriko Yamamoto sites',
}

const RootLayout: React.FC<childrenProps> = ({children}: childrenProps) => {
  return (
    <html lang="en" className={orbitron.variable}> 
      <body className="bg-white-200">
        <Navbar/>
        {children}
        <Fotter/>
      </body>
    </html>
  )
}

export default RootLayout