import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 26,
    }
    this.nextYear = this.nextYear.bind(this);
  }

  prevYear = () => {
    this.setState(state => ({
      age: --state.age
    }))
  }

  nextYear() {
    this.setState(state => ({
      age: ++state.age
    }))
  }

  render() {
    const {name, surname, link} = this.props;
    const {age} = this.state;
    return (
      <>
      <button onClick={this.nextYear}>++</button>
      <button onClick={this.prevYear}>--</button>
        <h1>My name is {name}, surname - {surname}, age - {age}</h1>
        <a href={link}>My profile</a>
      </>
    )
  }
}


const All = () => {
  return (
    <>
      <WhoAmI name='John' surname='Smith' link='#' />
      <WhoAmI name='Ivan' surname='Lol' link='#' />
      <WhoAmI name='Alex' surname='Chel' link='#' />
    </>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'));

