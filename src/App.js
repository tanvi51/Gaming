
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllGames from "./pages/AllGames";
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-games" element={<AllGames />} />
    </Routes>
    
  );
}

export default App;
