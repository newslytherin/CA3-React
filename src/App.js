import React, { Component } from "react"
import Welcome from "./components/Welcome";

class App extends Component {
 constructor(props) {
   super(props);
 }
 
 render() {
   return (
     <div>
       <Welcome />
     </div>
   )
 }
}
export default App;