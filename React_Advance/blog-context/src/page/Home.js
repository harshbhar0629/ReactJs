import React from 'react'
import Header from "../components/Header"
import Blogs from '../components/Blogs'
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div> 
        <Blogs></Blogs>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Home;