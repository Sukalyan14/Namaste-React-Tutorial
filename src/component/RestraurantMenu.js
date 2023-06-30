import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../config"
import  Shimmer from "./Shimmer"
import useRestaurant from "../utils/useRestaurant"

const RestraurantMenu = () => {
    //how to read a dynamic url

    const { id } = useParams();
    // const [res , setRes] = useState(null)

    const restaurant = useRestaurant(id)
    
    
    if(!restaurant){
        return <Shimmer/>
    }

    return (!restaurant) ? <Shimmer/> : (
        <div>
            <div>
                <h1>Restraurant Id: {id}</h1>
                <h2>{restaurant.name}</h2>
                <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="" /> 
                <h3>{restaurant.areaName}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.avgRating}</h3>
                <h3>{restaurant.costForTwoMessage}</h3>
            </div>

            <div>

            </div>
        </div>
    )
}

export default RestraurantMenu