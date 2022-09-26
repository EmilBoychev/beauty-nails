import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { WeDo } from './components/WeDo/WeDo';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <Header />
          <WeDo />
          <About />
          <Contact />
        </>
      }
      />

    </Routes>

  );
}

export default App;
