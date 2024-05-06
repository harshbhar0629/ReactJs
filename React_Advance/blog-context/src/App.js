import logo from './logo.svg';
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Blogs from "./components/Blogs"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
}

export default App;
