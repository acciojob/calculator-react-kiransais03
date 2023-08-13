<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React, { useState } from "react";
import Calculator from "./Calculator"
import "../styles/App.css"

const App = ()=>{

    let [calstring,setCalstring]=useState("");
    
    return(<div className="maincontainer">
    <Calculator calstring={calstring} setCalstring={setCalstring} />  
    </div>)
}

export default App;