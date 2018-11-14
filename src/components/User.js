import React, { Component } from "react"

export default class User extends Component{
    constructor(props){
        super(props)
        this.state = {username: props.username};
    }
    render(){
        return(
            <div>
                <h1>Welcome {this.state.username}</h1>
            </div>
        );
    }
}