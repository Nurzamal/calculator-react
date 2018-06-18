import React, { Component} from 'react';

class Button extends Component{
  handleClick = (e) =>{
    this.props.clickHandler(this.props.name)
  }
  render(){
    return(
      <button onClick={this.handleClick}>
        {this.props.name}
      </button>
    )
  }
}

export default Button;
