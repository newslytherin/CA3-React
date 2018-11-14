import React, { Component } from "react"
import Welcome from "./components/Welcome";
import Swapi from "./components/swapi";

class App extends Component {
 constructor(props) {
   super(props);
 }
 
 render() {
   return (
     <div>
       <Welcome />
       <Swapi />
     </div>
   )
 }
}
export default App;