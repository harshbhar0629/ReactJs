import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Blogs from "./components/Blogs"
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const { fetchBlogPost } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPost();
  }, []);

  return (
    <div className="App w-full h-full border flex flex-col gap-y-1 justify-center items-center ">
      
      <Header ></Header>
      <Blogs ></Blogs>
      <Footer ></Footer>
    </div>
  );
}

export default App;
