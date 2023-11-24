import dynamic from 'next/dynamic'
import AboutPage from './about/page'
import Work from './components/Work/Work'
import ContactPage from './contact/page'

const DynamicComponentWithNoSSR = dynamic(
  () => import('./components/Slide/Slider'),
  { ssr: false }
)

const Home: React.FC = () => {
  return (
    <>
      <DynamicComponentWithNoSSR/>
      <AboutPage/>
      <Work/>
      <ContactPage/>
    </>
    
  )
}

export default Home;
