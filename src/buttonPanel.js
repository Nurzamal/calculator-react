import React, {Component} from 'react';
import Button from './button'

class ButtonPanel extends Component{

  handleClick = (value) => {
    this.props.clickHandler(value);
  }

  render(){
    const symbols = ['AC', '+/-', '%','/', //'+'
                      '7', '8', '9', '*',
                      '4', '5', '6', '-',
                      '1', '2', '3', '+',
                      '0', '.', '='
                    ]; 
    return(
      <div className="button-panel">
        <div>
          {
            symbols.map(el => <Button name={el} clickHandler={this.handleClick} />)
          }
        </div>
    </div>
    )
  }
}
export default ButtonPanel;
