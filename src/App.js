import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { WeDo } from './components/WeDo/WeDo';
import { Banner } from './components/Banner/Banner';
import { Pricing } from './components/Pricing/Pricing';
import { Footer } from './components/Footer/Footer';
import { Experts } from './components/Experts/Expert';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <Header />
          <Banner />
          <WeDo />
          <About />
          <Pricing />
          <Experts />
          <Contact />
          <Footer />
        </>
      }
      />
    </Routes>

  );
}

export default App;
