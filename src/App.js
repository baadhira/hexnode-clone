import "./App.css";
import Accolades from "./views/components/Accolades";
import Banner from "./views/components/Banner";
import { Carousel } from "./views/components/Carousel";
import FooterComponent from "./views/components/FooterComponent";
import Header from "./views/components/Header";
import LogoSlider from "./views/components/Infiniteloop";
import KioskModeSection from "./views/components/KioskModeSection";
import KioskTabs from "./views/components/KioskTabs";
import PlatformsSection from "./views/components/PlatformsSection";
import SignUpSection from "./views/components/SignUpSection";


function App() {
  return (
    <>
      <Header />
      <Banner />
      <Accolades/>
      <KioskTabs />
      <KioskModeSection/>
      <Carousel/>
      <LogoSlider/>
      <PlatformsSection/>
      <SignUpSection/>
      <FooterComponent/>
    </>
  );
}

export default App;
