import React from 'react'
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header></Header>
      <div>
        <button
          onClick={() => navigate(-1)}
        >back</button>

        <h2>
          Blogs on <span>{ category}</span>
        </h2>
      </div>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  )
}

export default CategoryPage;