import ProductListing from './components/ProductListing';
import Navbar from './components/Navbar/NavBar';
import PostListingPage from './components/Post/Post';
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
            <Route exact path="/x" element={<PostListingPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;