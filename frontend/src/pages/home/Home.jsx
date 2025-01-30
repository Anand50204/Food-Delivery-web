import React, { useContext, useState } from 'react'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import AppDownload from '../../components/appDownload/AppDownload'
import { StoreContext } from '../../context/StoreContext'
import './Home.css'

const Home = () => {
  const [category, setCategory] = useState("All")
  const { food_list } = useContext(StoreContext)
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      {
        food_list == 0 && <div className='load'></div>
      }
      <AppDownload />
    </div>
  )
}

export default Home
