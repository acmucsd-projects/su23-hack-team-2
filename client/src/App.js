import './App.css';
import AccountInfo from './components/AccountInfo';
import NavBar from './components/NavBar'
import Inbox from './components/Inbox'
import Wishlist from './components/WishList';
import ProductDetails from './components/ProdDetails'
import NewListing from './components/NewListing'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <NavBar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/inbox" element={<Inbox />} />
            <Route exact path="/accountinfo" element={<AccountInfo />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
            <Route exact path="/productdetails" element={<ProductDetails />} />
            <Route exact path="/newlisting" element={<NewListing />} />
          </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;