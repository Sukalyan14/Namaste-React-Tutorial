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

// import React from "react"
// import ReactDOM from "react-dom/client"

const heading1 = React.createElement(  //CREATING a element in react
    'h1', //Element or tag in quotes
    {
        id: 'title',  //attributes of the above tag
        className: 'text',
        // style:'color:palegreen'
    },
    'Hello World'  //Children of the above created element
);

const heading2 = React.createElement(
    'h2', {
        id: 'sub-title',
        className: 'text',
        // style:'color:palegreen'
    },
    'Hello There'
);

const container = React.createElement(  //Creating a div
    'div', {
        id: 'container'
    },
    [heading1, heading2]  //Putting the above 2 headers inside that div
);

const root = ReactDOM.createRoot(document.getElementById('root')) //passing a react element inside the root

root.render(container) //render the container 