/** @format */

import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Blogs from "./components/Blogs";
import Home from "./page/Home"
import BlogPage from "./page/BlogPage"
import CategoryPage from "./page/CategoryPage"
import TagPage from "./page/TagPage"
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

function App() {
  const { fetchBlogPost, page, setPage } = useContext(AppContext);
  
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      // iska mtlb tag wala page show krna h
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPost(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPost(Number(page), null, category);
    }
    else {
      fetchBlogPost(Number(page));
    }
  }, [location.pathname, location.search]);

/**
 * 
  useEffect(() => {
    fetchBlogPost();
  }, []);

 <div className="App w-full h-full border flex flex-col gap-y-1 justify-center items-center ">
      
      <Header ></Header>
      <Blogs ></Blogs>
      <Footer ></Footer>
    </div>
  *
**/

  return (
    
		<Routes>
			<Route
				path="/"
				element={<Home></Home>}></Route>
			<Route
				path="/blog/:blogId"
				element={<BlogPage></BlogPage>}></Route>
			<Route
				path="/tags/:tag"
				element={<TagPage></TagPage>}></Route>
			<Route
				path="/categories/:category"
				element={<CategoryPage></CategoryPage>}></Route>
		</Routes>
	);
}

export default App;
