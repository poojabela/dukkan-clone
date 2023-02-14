import Header from "../components/common/Header"
import HeroSection from "../components/containers/HeroSection"
import Fashion from "../components/containers/Fashion"
import Features from "../components/containers/Features"
import Tools from "../components/containers/Tools"
import Themes from "../components/containers/Themes"
import Plugins from "../components/containers/Plugins"
import GrowStore from "../components/containers/GrowStore"
import Footer from "../components/common/Footer"

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Fashion />
      <Features />
      <Tools />
      <Themes />
      <Plugins />
      <GrowStore />
      <Footer />
    </div>
  )
}
