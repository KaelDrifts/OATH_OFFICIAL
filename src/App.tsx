import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import DeveloperSection from './components/DeveloperSection';
import WhyOATH from './components/WhyOATH';
import Footer from './components/Footer';
import Documentation from './components/Documentation';
import ApiDocs from './components/ApiDocs';
import Tokenomics from './components/Tokenomics';
import Governance from './components/Governance';
import Roadmap from './components/Roadmap';

function App() {
  const path = window.location.pathname;

  if (path === '/docs') {
    return (
      <div className="bg-[#f9e3be] text-[#3f1c08] min-h-screen">
        <NavBar />
        <Documentation />
        <Footer />
      </div>
    );
  }

  if (path === '/api-docs') {
    return (
      <div className="bg-[#f9e3be] text-[#3f1c08] min-h-screen">
        <NavBar />
        <ApiDocs />
        <Footer />
      </div>
    );
  }

  if (path === '/tokenomics') {
    return (
      <div className="bg-[#f9e3be] text-[#3f1c08] min-h-screen">
        <NavBar />
        <Tokenomics />
        <Footer />
      </div>
    );
  }

  if (path === '/governance') {
    return (
      <div className="bg-[#f9e3be] text-[#3f1c08] min-h-screen">
        <NavBar />
        <Governance />
        <Footer />
      </div>
    );
  }

  if (path === '/roadmap') {
    return (
      <div className="bg-[#f9e3be] text-[#3f1c08] min-h-screen">
        <NavBar />
        <Roadmap />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#f9e3be] text-[#3f1c08] min-h-screen">
      <NavBar />
      <HeroSection />
      <HowItWorks />
      <DeveloperSection />
      <WhyOATH />
      <Footer />
    </div>
  );
}

export default App;