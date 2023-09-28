import './globals.css'
import Header from './components/Header'
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
      <body className="bg-prime-100">
        <Header/>
        {children}
        <Fotter/>
      </body>
    </html>
  )
}

export default RootLayout