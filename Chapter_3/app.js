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

import React from "react"
import ReactDOM from "react-dom/client"

//JSX

const heading = (
    <h1 id="title" key="h2">Namaste React</h1>  //if jsx is written in multiple line then parenthesis is required
    )

const Title = () => (
    <h1 id="title" key="h2">Namaste React</h1>  //if jsx is written in multiple line then parenthesis is required
    )

//React Components

const HeaderComponent = () => {
    return (
    <div>
        <Title/>
        {/* {Title()} */}
        {/* {heading} */}
        <h1>Namaste React component</h1>
        <h2>H2 tag</h2>
    </div>
    );
}
// const heading = <h1 id="title" key="h2">Namaste React</h1> //if it is a one-liner than it can be written without parenthesis

const root = ReactDOM.createRoot(document.getElementById('root')) //passing a react element inside the root

//below line is for when we render react element
// root.render(heading) //render the container 

//below line is for react componet
root.render(<HeaderComponent/>)
