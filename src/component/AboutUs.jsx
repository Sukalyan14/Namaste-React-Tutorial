import { Outlet } from "react-router-dom"
import Profile from "./Profile"
import ProfileClass from "./ProfileClass"
import React from "react"

const AboutUs = () => {
    
    return (
        <div>
            <h1>Its the About Us Page </h1>
            <Profile name = {"Sukalyan"}/> {/*//Functional Component*/}
            <ProfileClass name = {"Sukalyan Class Component Prop"}/>
        </div>
    )
}

class AboutTo extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Its the About Us Page </h1>
                <Profile name={"Sukalyan"} /> {/*//Functional Component*/}
                <ProfileClass name={"Sukalyan Class Component Prop"} />
            </div>
        )
    }
}

export default AboutTo