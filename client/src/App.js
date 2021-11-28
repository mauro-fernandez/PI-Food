import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom"
import LandingPage from "./Components/LandingPage"
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
