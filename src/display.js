import React,{Component} from 'react';

class Display extends Component{
  render(){
    return(
      <div className="component-display">
        <div className="val">
          {this.props.value}
        </div>
      </div>
    )
  }
}
export default Display;
