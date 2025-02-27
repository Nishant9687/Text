import React ,{useState}from 'react'

export default function Form(props) {
  const handleOnClick=()=>{
    // console.log("uppercase on change"+text);
     let newtext=text.toUpperCase();
     setText(newtext)
     props.showAlert("convert to uppercse","success");
   }
   const handleclClick=()=>
   {
    let newtext='';
    setText(newtext)
    props.showAlert("clear all text","success");
   }
  const handleloClick=()=>{
    // console.log("uppercase on change"+text);
     let newtext=text.toLowerCase();
     setText(newtext)
     props.showAlert("convert to lowercase","success");
   }
  const handleOnChange=(event)=>
  {
    setText(event.target.value);
  }
  const[text,setText]=useState("");
  
  return (
    <>
  <div className="container ">
     <h1>{props.heading}</h1>
     <div className="mb-3">
       <label htmlFor="mytext" className="form-label"></label>
       <textarea className="form-control" onChange={handleOnChange}value={text} id="mytext" rows="8"></textarea>
       </div>
          <button type="button" onClick={handleOnClick} className="btn btn-primary mx-2">upprecase</button>
          <button type="button" onClick={handleloClick} className="btn btn-success mx-2">lowercase</button>
          <button type="button" onClick={handleclClick} className="btn btn-primary mx-2">clear</button>
    </div>
    <div className="container my-2">
      <h1>textsummary</h1>
      <p>{text.split(" ").length}words,and {text.length} caharachter</p>
      <p><i>readingtime</i><br></br>{0.008*text.split(" ").length}minutes</p>
      <p>{text}</p>
    </div>
    </>
  )
}
