// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'

function App() {
  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    console.log(mode);
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
  }

  return (
    <>
    {/* console.log({mode}); */}
<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
<TextForm heading="Enter the content to analyze below" mode={mode} />
</div>
<div className="container">
  <About/>
</div>
    </>
  );
}

export default App;
