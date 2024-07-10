import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header.jsx'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu.jsx'
import { FoodDisplay } from '../../Components/FoodDisplay/FoodDisplay.jsx'
import AppDownLoad from '../../Components/AppDownload/AppDownLoad.jsx'
const Home = () => {

    const [category, setCategory] = useState('All');


  return (
    <div>
      <Header />
      <ExploreMenu category = {category} setCategory = {setCategory} />
      <FoodDisplay category = {category} />
      <AppDownLoad />
    </div>
  )
}

export default Home