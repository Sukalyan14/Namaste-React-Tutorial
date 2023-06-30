import { useState , useEffect } from "react";
import { restaurantList } from "../config";
import { RestrauntCard } from "./RestarauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import { filterData } from "../utils/helper";

const Body = () => {

    const [searchTxt , setsearchTxt] = useState("")  

    const [allRestraunts, setAllRestraunts] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
        //Api Call
        getRestaurants()
    }, [])  //gets called when body itself is rendered only once and empty third brackets are called dependency array
    //one component can have multiple useEffect hooks

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3532772&lng=85.8265977&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        // console.log(json);
        setAllRestraunts(json?.data?.cards[0]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards)
    }
    //Also donot declare useState hook inside a if-else or loop or outside a component
    //Conditional Rendering
    // when not rendering component
    if(!allRestraunts) return null

    return allRestraunts.length == 0 ? <Shimmer/> : (
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search" 
                    placeholder="Search" 
                    value = {searchTxt} 
                    onChange = {(e) => {
                        setsearchTxt(e.target.value)
                }}/>
                <button 
                    className="search-btn"
                    onClick={()=> {
                        //update the state - restaruants
                        const data = filterData(searchTxt, allRestraunts)
                        // console.log(data);
                        setFilteredRestaurants(data)
                    }}
                    >Search
                    </button>
                <h1>{searchTxt}</h1>
            </div>
            <div className="restaurant-card">
                {
                    filteredRestaurants.map(restaurant => {
                        
                        return (
                            <Link to={"/retaurant/" + restaurant.data.id} key={restaurant.data.id}>  
                                <RestrauntCard {...restaurant.data} />
                            </Link>
                        );  //Assigning a key to each card
                    })
                }

            {/* <RestrauntCard {...restaurantList[0].data} />  Sending props to RestaurantCard function componenet */}
            {/* <RestrauntCard restaurant = {restaurantList[1]} hello = "world"/> */}
            </div>
        </>
    )
}

export default Body