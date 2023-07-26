import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Post from './Post/Post';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/Post" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;