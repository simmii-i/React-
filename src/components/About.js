import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClassComponent";
import ProfileFunc from "./Profile";
import { Component } from "react";


class About extends Component {
  constructor(props){
    super(props)
    
    console.log("parent")
  }


  componentDidMount(){
    console.log("parent-componentDidMount")
  }

  render(){
    console.log("parent-render")

    return (
      <div>
        <h1>About us page</h1>
        <p>Namaste .... 🙏</p>
        <ProfileFunc name={"SimmiClass"}/>
  
      </div>
    );
  }
}


export default About;

/**

 * 
 */