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
      <div id="restList">
        {restaurants.map((restaurant, idx)=>{
          return <Link to={{pathname:`restaurant/${restaurant.id}`,state: restaurant }}>
            <h2 id="restName">{ restaurant.name }</h2>
            <h3>{ restaurant.description }</h3>
            <p>{ restaurant.location }</p>
          </Link>
        })}
      </div>
    </div>
  );
}

export default Home;
