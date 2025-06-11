import TechStack from "./sections/TechStack";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import Testimonials from "./sections/Testimonials.jsx";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    <ExperienceSection />
    <TechStack />
    <Testimonials />
  </>
);

export default App;
