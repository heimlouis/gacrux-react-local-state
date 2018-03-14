import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    // this.state = {user: 'Louis'};
    this.state = {
      user: {
        name: '',
        city: '',
      }
    };
  
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeCity = this.handleChangeCity.bind(this)
  }




  handleChangeName(event){
    console.log({user:{...this.state.user, name:event.target.value}});
    this.setState({user:{...this.state.user, name:event.target.value}});
    
  }

  handleChangeCity(event){
    console.log({user:{...this.state.user, city:event.target.value}})
    this.setState({user:{...this.state.user, city:event.target.value}})
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <input onChange={this.handleChange}/> */}
        <input onChange={this.handleChangeName}/>
        <input onChange={this.handleChangeCity}/>
        <p>{this.state.user.name} {this.state.user.city}</p>
     
      </div>
    );
  }
}

export default App;
