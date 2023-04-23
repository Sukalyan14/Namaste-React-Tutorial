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
//Named Import
import { createBrowserRouter } from "react-router-dom";
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
            <Body/>
            {/* <Footer/> */}
            <div style={{
                backgroundColor:"red"
            }}>
              <Footer />
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')) //passing a react element inside the root

root.render(<Applayout/>)
