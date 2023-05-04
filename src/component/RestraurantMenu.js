import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../config"

const RestraurantMenu = () => {
    //how to read a dynamic url

    const { id } = useParams();
    console.log(id);
    const [res , setRes] = useState({})
    useEffect(() => {
        getRestaurantInfo()
    },[])

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" + id)
        const json = await data.json()
        console.log(json)
        setRes(json.data)
    }

    return (
        <div>
            <h1>Restraurant Id: {id}</h1>
            {/* <h2>{res.name}</h2> */}
            {/* <img src={IMG_CDN_URL + res.cloudinaryImageId} alt="" /> */}
        </div>
    )
}

export default RestraurantMenu