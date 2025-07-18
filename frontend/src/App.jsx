import { Routes, Route } from 'react-router-dom';
import ShortenForm from './Formshorter';
import StatsPage from './Statspage';
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShortenForm />} />
      <Route path="/Statspage" element={<StatsPage />} />
    </Routes>
  );
}

export default App;
