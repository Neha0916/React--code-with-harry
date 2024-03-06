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

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null);
    },2000)
  }

  const toggleMode=()=>{
    console.log(mode);
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    }
  }

  return (
    <>
    {/* console.log({mode}); */}
    <Alert alert={alert}/>
<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
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
