import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route to="/" element={<Home></Home>}></Route>
        <Route to="/cart" element={ <Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
