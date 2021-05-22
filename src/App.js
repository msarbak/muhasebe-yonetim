import './App.css';
//import User from "./User";
import Navbar from "./Navbar";
import AddUser from "./AddUser";
import Users from "./Users";
import React, { Component } from 'react'
class App extends Component {
  
  render() {
    return (
      <div className="container">
      <Navbar title="Muhabebe - Yönetim"/>
      <hr/>
      <AddUser/>
      <Users/>
  
      </div>
    );
  }
}

export default App;
