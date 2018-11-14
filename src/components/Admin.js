import React, { Component } from "react"

export default class Admin extends Component{
    constructor(props){
        super(props)
        this.state = {name: props.username};
    }
    render(){
        return(
            <div>
                <h1>Welcome {this.state.name}</h1>
            </div>
        );
    }
}