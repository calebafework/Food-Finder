import React, {useState, useEffect} from 'react'
import axios from 'axios'
import RestaurantModel from '../models/restaurant'
import { useHistory } from 'react-router-dom'

const RestaurantList = () => {
    const [ name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = {
            name,
            location,
            description
        }
        const newRestaurant = await RestaurantModel.create(data)
        history.replace(`/restaurant/${ newRestaurant.id }`)
    }

        return (
            <div>
                <h1>Restaurants</h1>
                <form onSubmit={handleSubmit}>
                    <label> Restaurant Name:</label> 
                    <input type="text" name="name" value= { name }  onChange= {e => setName(e.target.value)}/>
                    <label> Restaurant Location:</label> 
                    <input type="text" name="location" value= { location }  onChange= {e => setLocation(e.target.value)}/>
                    <label> Description:</label> 
                    <input type="text" name="description" value= { description }  onChange= {e => setDescription(e.target.value)}/>
                    <button type="submit">Submit Restaurant </button>
                </form>
            </div>
        );
}

export default RestaurantList;