import Logo from "../assets/2021-09-07.png"
import { Link } from "react-router-dom"

const loggedInUser = () => {
    //API authentication
    return true
}

const Title = () => (
    <a href="/">
        <img
        className="logo"
            // src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
            src={Logo} 
            alt="logo" />  
     </a>
    )

const Header = () => {
    return (
    <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li><Link to="/about">About Us</Link></li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        {
                loggedInUser === true ? <button>Logout</button> : <button>Login</button>
        }     
    </div>
    );
}

export default Header;