import React, { useEffect, useState } from 'react';
import RestaurantModel from "../models/restaurant"
import './RestaurantShow.scss'

const RestaurantShow = ({history, match}) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null)
    const [editMode, setEditMode] = useState(false)

    const getInfo = async() => {
        const info = await RestaurantModel.show(match.params.id)
        setRestaurantInfo(info)
    }

    useEffect(() => {
        getInfo()
    },[])

    const handleDelete = async() => {
        const res = await RestaurantModel.delete(restaurantInfo.id)
        console.log(res)
        history.push('/')
    }
    
    const handleUpdate = async () => {
        const res = await RestaurantModel.update(restaurantInfo)
        console.log(res)
        getInfo()
    }

    if(!restaurantInfo){
        return null
    }

    const displayInfo = (
        <div>
                <h1>{ restaurantInfo.name }</h1>
                <h2>{ restaurantInfo.description }</h2>
                <h4>{ restaurantInfo.location }</h4>
            </div>
    )

    const handleChange = (e) =>{
        setRestaurantInfo({
            ...restaurantInfo,
            [e.target.name]: e.target.value
        })
    }

    const editRest = () => {
        if(editMode){
            handleUpdate()
        }
        setEditMode(!editMode)
    }

    const editInfo = (
        <div>Edit
            <div>
                <input 
                    type="text"
                    name="name"
                    value={ restaurantInfo.name}
                    onChange= {handleChange}
                />
                <input 
                    type="text"
                    name="description"
                    value={ restaurantInfo.description}
                    onChange= {handleChange}
                />
                <input 
                    type="text"
                    name="location"
                    value={ restaurantInfo.location}
                    onChange= {handleChange}
                />
            </div>
        </div>
    )

    return (
        <div>
            { editMode ? editInfo : displayInfo }
            { localStorage.getItem('id') ? 
                <div>           
                    <button onClick={ handleDelete }>Delete</button>
                    <button onClick={ editRest }>{ editMode ? "Save Changes" : "Edit" }</button>
                </div>    
                    :
                <p> Must login or register to edit restaurant </p>
            }
        </div> 
    );
}

export default RestaurantShow;
