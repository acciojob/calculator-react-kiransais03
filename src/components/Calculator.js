import React, { useState } from "react";
import "../styles/Calculator.css"
import {evaluate} from "mathjs";

const Calculator = ({calstring,setCalstring})=>{
   let elemarr = ['C','/','*','-','7','8','9','+','4','5','6','1','2','3','=','0 ','.'];
  let [ans,setAns] =useState("");


   function clickfunc(e) {

    if(e.target.innerText==='C')
    {
        setAns("");
        setCalstring("");
        return
    }

    if(e.target.innerText==='=')
    {
        try{
        console.log(calstring)
        let ansval = evaluate(calstring);
        setAns(ansval);
        }
        catch(error) {
           setCalstring("Invalid Expression")
        }
        return;
    }

    e.target.style.border="1px solid red"
    let clickeddiv = e.target;
    setTimeout((e)=>{clickeddiv.style.border="1px solid black";console.log("ok")},200);

    let selectedval = e.target.innerText;
    setCalstring(calstring+selectedval);

   }

    return (<>
    <div className="calstring">{calstring} <h3>{ans}</h3> </div>
    <div className="ui">
        {elemarr.map((elem,index,arr)=>{return (<div className={`uielements no${index}`} key={index} onClick={clickfunc}>{elem}</div>)})}
        <div className="uielements"></div>
    </div>
    </>)
}

export default Calculator;