import './App.css';
import React from "react";
import Navbar from "./components/layout/navbar.component";
import Users from "./components/users/users.component";
import axios from "axios";

class App extends React.Component {

state = {
  users: [],
  loading: false
}

  async componentDidMount () {

    this.setState({loading:true});


    const res = await axios.get("https://api.github.com/users");

    this.setState({users:res.data, loading:false});  
  }
  

  render() {

      

    return (
      <div className ="app">
      <nav className="bg-primary">
        <Navbar title="GitHub Finder" icon="faGithub"/>
      </nav>
      <div className="container">
      <Users loading={this.state.loading} users={this.state.users}/>
      </div>
      </div>
    );
  }

}

export default App;
