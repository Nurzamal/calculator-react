import React, { Component } from 'react'
import calculate from './calculate'
import ButtonPanel from './buttonPanel'
import Display from './display'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      total:null,
      next:null,
      operation:null
    }
  }

  handleClick = (value) => {
    this.setState(calculate(this.state, value));
  };

  render(){
    return(
      <div className="component-app">
          <Display value={this.state.next || this.state.total || '0'} />
          <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  }
}

export default App;
