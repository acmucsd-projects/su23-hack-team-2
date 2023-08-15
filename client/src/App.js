import ProductListing from './components/ProductListing';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <div className="App">
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ProductListing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
