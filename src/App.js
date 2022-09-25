import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<> <Header /> <About /></>} />
    </Routes>

  );
}

export default App;
