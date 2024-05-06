import logo from './logo.svg';
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Blogs from "./components/Blogs"
import Spinners from './components/Spinners';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Blogs></Blogs>
      <Footer></Footer>
      {/* <Spinners></Spinners> */}
    </div>
  );
}

export default App;
