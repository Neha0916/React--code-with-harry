import logo from './logo.svg';
import './App.css';
let name="Neha";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
      <h1>Hello  {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ex doloribus magnam tempore at, odio quos eligendi deleniti ipsum alias numquam itaque corrupti consequuntur quo possimus quis ad voluptate. Modi impedit quia quasi laudantium at fuga iusto officiis aliquid repellendus.</p>
      </div>
    </>
  );
}

export default App;
