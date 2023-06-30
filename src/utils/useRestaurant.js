import { useEffect, useState } from "react"

const useRestaurant = (resId) => {
    const [restaurant , setRestaurant] = useState(null)

    //Get Data from API
    useEffect(() => {
        getRestaurantInfo()

        const timer = setInterval(()=> {
            console.log("hello")
        }, 1000)

        return () => {
            console.log("unmounting functional component");
            clearInterval(timer)
        }
    },[]) 
    // In spa in react , if a interval or something similar is set on one component's useEffect , then that part of code will keep on running even after changing the page, to prevent that it needs to be unmounted via a return statement in useEffect , same is done using componentWillUnmount method

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.3532772&lng=85.8265977&restaurantId=" + resId)
        const json = await data.json()
        console.log(json.data.cards[0].card.card.info);
        setRestaurant(json.data.cards[0].card.card.info)
    }

    //return restaurant data
    return restaurant
}

export default  useRestaurant