import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import EmployeeExperience from "./components/home/EmployeeExperience";
import HRTransformation from "./components/home/HRTransformation";
import Recognition from "./components/home/Recognition";
import EmployeeServices from "./components/home/EmployeeServices";
import HealthWellness from "./components/home/HealthWellness";
import CorporateGifting from "./components/home/CorporateGifting";
import HRImpact from "./components/home/HRImpact";
import FinalCTA from "./components/home/FinalCTA";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <EmployeeExperience />
        <HRTransformation />
        <Recognition />
        <EmployeeServices />
        <HealthWellness />
        <CorporateGifting />
        <HRImpact />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}

export default App;
