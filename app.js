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

const Title = () => (
    <a href="/">
        <img
        className="logo"
            src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj" 
            alt="logo" />  
     </a>
    )


const HeaderComponent = () => {
    return (
    <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
}

const Body = () => {
    return (
        <h4>Body</h4>
    )
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}

const Applayout = () => {
    return (
        <>
            <HeaderComponent/>
            <Body/>
            <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')) //passing a react element inside the root

root.render(<Applayout/>)
