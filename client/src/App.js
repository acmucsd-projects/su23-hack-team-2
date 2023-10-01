import './App.css';
import AccountInfo from './components/AccountInfo';
import NavBar from './components/NavBar'
import PagePath from './components/PagePath'
import Inbox from './components/Inbox'
import Wishlist from './components/WishList';
import PostListingPage from './components/Post';
import ProductListingFilter from './components/ProductListingFilter';
import ProductListing from './components/ProductListing';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Login from "./components/Login/login";
import Logout from "./components/Login/logout";
import { useEffect } from 'react';
import { gapi } from 'gapi-script'

const clientId = "408051983758-p7n4273ka54c34e8nt5jm18q3kqmd6nb.apps.googleusercontent.com";


function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  });

  return (
    <main>
      <NavBar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/accountinfo" element={<AccountInfo />} />
            <Route exact path="/inbox" element={<Inbox />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
            <Route exact path="/postlisting" element={<PostListingPage />} />
            <Route exact path="/" element={<ProductListing />} />
          </Routes>
        </BrowserRouter>
        <Login/>
        <Logout/>
    </main>
  );
}

export default App;