import './App.css';
import React from "react";
import Navbar from "./components/layout/navbar.component";
import Users from "./components/users/users.component";
import axios from "axios";
import Search from "./components/users/search.component";

class App extends React.Component {

state = {
  users: [],
  loading: false
}

  async componentDidMount () {

   


    
  }
  
  searchUsers = async (text) => {

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`);

    this.setState({users:res.data.items, loading:false});  

    console.log(text)

  }

  render() {

      

    return (
      <div className ="app">
      <nav className="bg-primary">
        <Navbar title="GitHub Finder" icon="faGithub"/>
      </nav>
      <div className="container">
        <Search searchUsers={this.searchUsers}/>
      <Users loading={this.state.loading} users={this.state.users}/>
      </div>
      </div>
    );
  }

}

export default App;
