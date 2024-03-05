import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("To Upper Case" + text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleDownClick=()=>{
        console.log("To Lower Case" + text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        
        setText(event.target.value);
    }
    const displayTrimClick=()=>{
        let newText=text.split(/[ ]+/);
        newText=newText.join(" ");
        setText(newText);
    }
    const displayClearClick=()=>{
        const newText='';
        setText(newText);
    }
    const[text, setText] =useState('Enter text here')
  return (
    <>
    <div className="container">
<div className="mb-3">
<h1 >{props.heading}</h1>
    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" ></textarea>
</div>
<button className="btn btn-success mx-3 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-success mx-3 my-3" onClick={handleDownClick}>Convert to Lowercase</button>
<button className="btn btn-success mx-3 my-3" onClick={displayTrimClick}>Trim</button>
<button className="btn btn-success mx-3 my-3" onClick={displayClearClick}>Clear Text</button>
 
    </div>
    <div className="container">
<h1 className='my-3'>Your text summary</h1>
<p>{text.split(" ").length} words and {text.length}characters</p>
<p>{0.008*text.split(" ").length}</p>
<h2>Preview</h2>
<p>{text}</p>
</div>
</>
    
  )
}
