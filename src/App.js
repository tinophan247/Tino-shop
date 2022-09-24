import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Containers/Header";
import HomeScreen from "./Containers/HomeScreen";
import ProductDetails from "./Containers/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductDetails />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
