import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Table from './components/Table.jsx';
import logo from './consensys-logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: []
    }
    this.getInfo = this.getInfo.bind(this);
  }

  componentDidMount() {
    console.log('Mounted')
    this.getInfo(); //for quick testing
  }

  getInfo() {
    axios.get('/information', {})
      .then((response) => {
        console.log(response.data);
        this.setState({
          information: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        {/* <button
          onClick={
            () => {
              console.log(this.state)
            }
          }
        >Get Info From Files</button> */}
        <img src={logo} className="App-logo" alt="logo" />
        <Table 
        information = {this.state.information}
        />
      </div >
    );
  }
}

export default App;
