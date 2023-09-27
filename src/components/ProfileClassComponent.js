import React from "react";
class Profile extends React.Component {
    constructor(props){
        super(props);
        //create state
        this.state = {
            userinfo : {}
            
        }
        console.log("child -constructor" + this.props.name)
    }

   async componentDidMount(){
    // const data =await fetch("https://api.github.com/users/akshaymarch7")
    // const json = await data.json();
    // console.log(json)
    // this.setState({
    //   userinfo : json
    // });
   this.timer =  setInterval (()=>{
        console.log("namaste react")
    },1000);
   
        console.log("child-componentDidMount" + this.props.name)
    }

    componentWillUnmount(){

        clearInterval(this.timer);
    }

   render () {
    console.log("child-render"+ this.props.name)
    return (
        <div>

            <h1>profile class Component</h1>
            <img src={this.state.userinfo.avatar_url}></img>
            <h3>name : {this.state?.userinfo?.name}</h3>
            <h3>country :{this.state?.userinfo?.location} </h3>
            
        </div>
    )
   }
}

export default Profile;