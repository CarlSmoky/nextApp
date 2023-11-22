import dynamic from 'next/dynamic'
import AboutPage from './about/page'
import AnnouncementPage from './announcement/page'
import ImageLinkSection from './components/ImageLinkSection'
import ContactPage from './contact/page'

const DynamicComponentWithNoSSR = dynamic(
  () => import('./components/Slide/Slider'),
  { ssr: false }
)

const Home: React.FC = () => {
  return (
    <>
      <DynamicComponentWithNoSSR/>
      <AnnouncementPage/>
      <AboutPage/>
      <ImageLinkSection/>
      <ContactPage/>
    </>
    
  )
}

export default Home;
