import logo from './logo.svg';
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Blogs from "./components/Blogs"
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
// import Spinners from './components/Spinners';

function App() {
  const { fetchBlogPost } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPost();
  }, []);

  return (
    <div className="App w-full h-auto">
      
      <Header></Header>
      <Blogs></Blogs>
      <Footer></Footer>
      {/* <Spinners></Spinners> */}
    </div>
  );
}

export default App;
