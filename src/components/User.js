import React, { Component } from "react"

export default class User extends Component{
    constructor(props){
        super(props)
        this.state = {name: "Welcome"};
    }
    render(){
        return(
            <div>
                <h1>Welcome {this.state.name}</h1>
            </div>
        );
    }
}