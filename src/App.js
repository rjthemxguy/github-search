import './App.css';
import React from "react";
import Navbar from "./components/layout/navbar.component";

class App extends React.Component {

  

  render() {

      

    return (
      <nav className="bg-primary">
        <Navbar/>
      </nav>
    );
  }

}

export default App;
