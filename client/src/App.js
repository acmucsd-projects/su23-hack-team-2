import './App.css';
import AccountInfo from './components/AccountInfo';
import NavBar from './components/NavBar'
// import PagePath from './components/PagePath'
import Inbox from './components/Inbox'
import Wishlist from './components/WishList';
import ProductDetails from './components/ProdDetails'
import NewListing from './components/NewListing'
import ProductListing from './components/ProductListing';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <NavBar />
        <BrowserRouter>
          <Routes>
          <Route exact path="/" element={<ProductListing />} />
            <Route exact path="/inbox" element={<Inbox />} />
            <Route exact path="/accountinfo" element={<AccountInfo />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
            <Route exact path="/productdetails" element={<ProductDetails />} />
            <Route exact path="/newlisting" element={<NewListing />} />
            <Route exact path="/navbar" element={<NavBar />} />
            {/*<Route exact path="/pagepath" element={<PagePath />} />*/}
          </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;