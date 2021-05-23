import './App.css';
import React from "react";
import Navbar from "./components/layout/navbar.component";
import Users from "./components/users/users.component";

class App extends React.Component {

  
  

  render() {

      

    return (
      <div className ="app">
      <nav className="bg-primary">
        <Navbar title="GitHub Finder" icon="faGithub"/>
      </nav>
      <Users/>
      </div>
    );
  }

}

export default App;
