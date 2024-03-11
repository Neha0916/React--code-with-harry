// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';
// import switch from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  let color;
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null);
    },2000)
  }

  const colorChange=(event)=>{
    color=event.target.value;

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode(color);
      document.body.style.backgroundColor=color;
      document.title='TextUtils- Dark Mode';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title='TextUtils- Light Mode';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} onColorChange={colorChange} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm heading="Try TextUtils Word Counter, character counter, remove extra spaces" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
    
//     <>
//     <Alert alert={alert}/>
// <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} onColorChange={colorChange}/>
// <div className="container my-3">
//     {/* <About /> */}
//     <TextForm heading="Enter the content to analyze below" mode={mode} showAlert={showAlert} />
// </div>
// </>
  );
}

export default App;
