import { useState , useEffect } from "react";
import { restaurantList } from "../config";
import { RestrauntCard } from "./RestarauntCard";
import Shimmer from "./Shimmer";

const filterData = (searchtxt , restaurant_data) => {
    return restaurant_data?.name?.toLowerCase().filter((restaurant) => restaurant.data.name.includes(searchtxt.toLowerCase()))
}

const Body = () => {

    //searchTxt is a local variable and in brackets we can give the default value for the state variable
    const [searchTxt , setsearchTxt] = useState("")  //use state is used to create state variables. UseState function returns an array and the first element is a variable and second element is a function which is used to change in the state variable  

    // const [restaurants, setrestaurants] = useState(restaurantList)
    const [allRestraunts , setAllRestraunts] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    
    //how to avoid rendering a component
    //Also donot declare useState hook inside a if-else or loop or outside a component

    useEffect(() => {
        //Api Call
        getRestaurants()
    },[])  //gets called when body itself is rendered only once and empty third brackets are called dependency array
    //one component can have multiple useEffect hooks
    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()

        console.log(json);
        setAllRestraunts(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    console.log("render");

    //Conditional Rendering

    // when not rendering component
    if(!allRestraunts) return null


    // if(filteredRestaurants.length == 0)
    //     return <h1>No restaurants found</h1>

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

                        setFilteredRestaurants(data)
                    }}
                    >Search
                    </button>
                <h1>{searchTxt}</h1>
            </div>
            <div className="restaurant-card">
                {
                    filteredRestaurants.map(restaurant => {
                        return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />  //Assigning a key to each card
                    })
                }

            {/* <RestrauntCard {...restaurantList[0].data} />  Sending props to RestaurantCard function componenet */}
            {/* <RestrauntCard restaurant = {restaurantList[1]} hello = "world"/> */}
            </div>
        </>
    )
}

export default Body