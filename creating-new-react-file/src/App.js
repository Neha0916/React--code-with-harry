// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <>
<Navbar title="TextUtils" aboutText="About TextUtils"/>
<div className="container my-3">
<TextForm heading="Enter the content to analyze below" />
</div>
<div className="container">
  <About/>
</div>
    </>
  ); 
}

export default App;
