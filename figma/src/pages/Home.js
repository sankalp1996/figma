import React from 'react'
import Navbar from '../components/navbar'
import "../css/myCss.css"
import Header from '../components/header'
import Expertise from '../components/expertise'
import About from '../components/about'
import Blog from '../components/blog'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <Expertise/>
    <About/>
    <Blog/>
    </div>
  )
}

export default Home
