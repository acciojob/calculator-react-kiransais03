<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React, { useState } from "react";
import Calculator from "./Calculator"

const App = ()=>{

    let [calstring,setCalstring]=useState("");
    
    return(<>
    <Calculator calstring={calstring} setCalstring={setCalstring} />  
    </>)
}

export default App;