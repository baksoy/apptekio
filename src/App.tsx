import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import Included from './components/sections/Included';
import WhoFor from './components/sections/WhoFor';
import Pilot from './components/sections/Pilot';
import Faq from './components/sections/Faq';
import CtaBand from './components/sections/CtaBand';

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Included />
        <WhoFor />
        <Pilot />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}

export default App;
