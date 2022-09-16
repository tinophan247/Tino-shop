import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">Tino shop</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen/>}/> 
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
