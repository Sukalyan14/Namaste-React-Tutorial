import React from "react";

class Profile extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            userinfo: {
                login:"Dummy Name",
              }
        }//Creating a state in class based component
    } //Also a lifecycle method

   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/SNSoul414")
        const json = await data.json()
        console.log(json);
        this.setState({
          userinfo:json,
        })
    } // A lifecycle method , native to class based component and runs after the render functions 

    componentDidUpdate(){
      console.log("Component Did update")
    }

    componentWillUnmount(){
      console.log("Unmounting Component")
    }
    render() { //very imp. Cant create a class based component without render method
      //state could also be destructured
      // const {count} = this.state
      return (
        <div>
          <h2>Profile Class Component</h2>
          <h3>Name is: - {this.state?.userinfo?.login}</h3>
          <img src={this.state?.userinfo?.avatar_url} alt="" />
        </div>
      )
    }
}// in class based components we donot mutate state directly
  //Never do this.state = value

export default Profile