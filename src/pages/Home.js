import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css'
import RestaurantModel from "../models/restaurant"


const Home = () => {
  let [restaurants, setRestaurants] = useState([])

  useEffect(()=>{
    const fetchData=async()=>{
      const res = await RestaurantModel.index()
      setRestaurants(res)
    }
    fetchData()
  },[])


  return (
    <div>
      <h1>Food Finder</h1>
      <div>
        {restaurants.map((restaurant, idx)=>{
          return <Link to={{pathname:`restaurant/${restaurant.id}`,state: restaurant }}>
            <h2>{ restaurant.name }</h2>
            <h3>{ restaurant.description }</h3>
            <p>{ restaurant.location }</p>
          </Link>
        })}
      </div>
    </div>
  );
}

export default Home;
