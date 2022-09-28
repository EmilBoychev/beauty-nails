import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Wedo } from './components/Wedo/Wedo';
import { Banner } from './components/Banner/Banner';
import { Pricing } from './components/Pricing/Pricing';
import { Footer } from './components/Footer/Footer';
import { Experts } from './components/Experts/Expert';
import { Error404 } from './components/Error404/Error404';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <Header />
          <Banner />
          <Wedo />
          <About />
          <Pricing />
          <Experts />
          <Contact />
          <Footer />
        </>
      }
      />

      <Route path='*' element={<Error404 />} />
    </Routes>

  );
}

export default App;
