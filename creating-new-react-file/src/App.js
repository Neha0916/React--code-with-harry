// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'

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
    // console.log(color);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode(color);
      document.body.style.backgroundColor=color;
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
    {/* console.log({mode}); */}
    <Alert alert={alert}/>
<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} onColorChange={colorChange}/>
<div className="container my-3">
<TextForm heading="Enter the content to analyze below" mode={mode} showAlert={showAlert} />

</div>
{/* <div className="container">
  <About/>
</div> */}
    </>
  );
}

export default App;
