import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<> <Header /> <About /> <Contact /></>} />
    </Routes>

  );
}

export default App;
