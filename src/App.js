import './App.css';
import React from "react";
import Navbar from "./components/layout/navbar.component";
import UserItem from "./components/users/user-item.component";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      id : "id",
      login: "rj",
      avatar_url:"https://avatars.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo"

    }
  }
  

  render() {

      

    return (
      <div className ="app">
      <nav className="bg-primary">
        <Navbar title="GitHub Finder" icon="faGithub"/>
      </nav>
      <UserItem/>
      </div>
    );
  }

}

export default App;
