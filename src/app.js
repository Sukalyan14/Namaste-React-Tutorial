//parcel features
// 
// Create a server
// File Watcher Algorithm
// Bundling
// Minifying
// Cleaning Code
// HMR - Hot Module Reload
// Allows caching
// Production and dev build
// allows https on dev build - npx parcel "root-file name" --https
// Image Optimization
// Caching while development
// Compression
// Compatible with older browser - browserlist
// port no.
// Consistent Hashing algo
// zero config
// tree shaking - removing un-wanted
// transitive dependency

import React from "react";
import ReactDOM from "react-dom/client";
//Default Import
import Header  from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import AboutUs from "./component/AboutUs";
import Error from "./component/Error";
//Named Import
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";   //RouterProvider is a component
import Contact from "./component/Contact";
import RestraurantMenu from "./component/RestraurantMenu";
import Profile from "./component/Profile";
// import { Title } from "./component/Header";

//importing both title and headers when both are marked as export
// import { HeaderComponent , Title } from "./component/Header";

//Importing if header is exported as default
// import HeaderComponent , {Title} from "./component/Header";

//Importing alll from the file and storing into variable called Obj
// import * as Obj from "./component/Header"  //Import everything from the file and then use individual items

// config Driven UI


const Applayout = () => {
    return (
        //{<></>-> <React.Fragment></React.Fragment>}
        // <>
        //     <>
        //         <HeaderComponent/>
        //     </>
        // </>

        <> 
            <Header/>
            <Outlet/>
            <Footer/>
            {/* <div style={{
                backgroundColor:"red"
            }}>
              <Footer />
            </div> */}
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Applayout/>,
        errorElement:<Error/>,
        children: [
            {
                path:"/",
                element: <Body/>,
            },
            {
                path:"/about",
                element: <AboutUs/>,
                children:[
                    {
                        path:"profile",   //Don't write /profile for nested route because a "/" in here means its directly coming after the root path
                        element: <Profile />
                    },
                ]
            },
            {
                path:"/contact",
                element: <Contact/>,
            },
            {
                path:"/retaurant/:id",
                element: <RestraurantMenu/>
            }
        ]
    }, 
])

const root = ReactDOM.createRoot(document.getElementById('root')) //passing a react element inside the root

root.render(<RouterProvider router={appRouter}/>)
