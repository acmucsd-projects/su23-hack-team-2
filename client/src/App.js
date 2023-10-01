import './App.css';
import AccountInfo from './components/AccountInfo';
import NavBar from './components/NavBar'
import PagePath from './components/PagePath'
import Inbox from './components/Inbox'
import Wishlist from './components/WishList';
import ProdDetails from './components/ProdDetails'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <NavBar />
      <PagePath />
        <BrowserRouter>
          <Routes>
            <Route exact path="/inbox" element={<Inbox />} />
            <Route exact path="/accountinfo" element={<AccountInfo />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
            <Route exact path="/productdetails" element={<ProdDetails />} />
          </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;