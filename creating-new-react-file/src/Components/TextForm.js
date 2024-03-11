import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("To Upper Case" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Convertd to UpperCase","success");
    }
    const handleCopyText=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","success");
    }
    const handleDownClick=()=>{
        // console.log("To Lower Case" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Convertd to LowerCase","success");
    }
    const handleOnChange=(event)=>{
        console.log(props.color+" "+props.mode);
        setText(event.target.value);

    }
    const displayTrimClick=()=>{
        let newText=text.split(/[ ]+/);
        newText=newText.join(" ");
        setText(newText);
        props.showAlert("Removed all the extra spaces","success");
    }
    const displayClearClick=()=>{
        const newText='';
        setText(newText);
        props.showAlert("Text Box is all Cleared","success");
    }
    const[text, setText] =useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
<div className="mb-3" style={{color: props.mode==='light'?'black':'white'}}>
<h1 className='mb-4'>{props.heading}</h1>
    <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':props.mode,color: props.mode==='light'?'black':'white'}} id="myBox"  value={text} onChange={handleOnChange} rows="8" ></textarea>
</div>
<button disabled={text.length===0} className="btn btn-success mx-3 my-3" onClick={handleUpClick}>Convert to Uppercase</button>

<button disabled={text.length===0} className="btn btn-success mx-3 my-3" onClick={handleCopyText}>Copy Text</button>

<button disabled={text.length===0} className="btn btn-success mx-3 my-3" onClick={handleDownClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-success mx-3 my-3" onClick={displayTrimClick}>Trim</button>
<button disabled={text.length===0} className="btn btn-success mx-3 my-3" onClick={displayClearClick}>Clear Text</button>
 
    </div>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
<h1 className='my-3'>Your text summary</h1>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} words and {text.length}characters</p>
<p>{0.008*text.split(" ").filter((element)=>{return element.length!==0 }).length} minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview"}</p>
</div>
</>
    
  )
}
