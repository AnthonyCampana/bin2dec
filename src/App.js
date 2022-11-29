import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      number: 0}

      this.binaryConverter = this.binaryConverter.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();
  }

  binaryConverter(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    let exponent = 0;
    let newNumber = 0;
    let temp = this.state.value;
    if(temp.length >= 8) {
      alert("Enter a binary number that is less than 8");
      event.preventDefault();
      return;
    }

    for(let i = temp.length -1; i >= 0; i--) {
      if(temp[i] !== '0' && temp[i] !== '1') {
        alert("This is not a valid binary number ");
      }
      
      newNumber += parseInt(temp[i]) * 2 ** exponent;
      exponent++;
    }

    this.setState({
      value: this.state.value,
      number: newNumber,
    })
    event.preventDefault();
  }

  render() {
  return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Enter a binary number 
            <input type="text" ref={this.input} onChange={this.binaryConverter}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>

        <h3>{this.state.number}</h3>
      </div>
  );
  }
}

export default App;
