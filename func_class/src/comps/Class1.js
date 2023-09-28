import React from 'react';

class Class1 extends React.Component {

  /** コンポーネント生成時処理  */
  constructor(props) {
    console.log('== call constructor');
    super(props);
    this.state = {
      left: 0,
      right: 0,
      calc: 0,
    };
  }

  calculator(lr,e) {
    let calcOperator = this.props._operator.toLowerCase();
    //let operator = '+';
    let calcVal = 0;
    let left = 0;
    let right = 0; 

    if (lr === 'L') {
      left = e.target.value;
      right = this.state.right;
    } else {
      left = this.state.left;
      right = e.target.value;
    }

    if (calcOperator === 'plus') {
      calcVal = parseInt(left) + parseInt(right);
    } else if (calcOperator === 'minus') {
      calcVal = parseInt(left) - parseInt(right);
    } else if (calcOperator === 'multiplication') {
      calcVal = parseInt(left) * parseInt(right);
    } else if (calcOperator === 'division') {
      calcVal = parseInt(left) / parseInt(right);
    } else {
      calcVal = 0;
    }
    
    this.setState((state, props) => ({
      left: left,
      right: right,
      calc: calcVal
    }));
    this.props._getResult(calcVal);
  }

  /** props/stateの更新時の処理  */
  render() {
    if (!this.props._view) return null;
    let calcOperator = this.props._operator.toLowerCase();
    let operator = '+';

    if (calcOperator === 'plus') {
      operator = '+';
    } else if (calcOperator === 'minus') {
      operator = '‐';
    } else if (calcOperator === 'multiplication') {
      operator = '×';
    } else if (calcOperator === 'division') {
      operator = '÷';
    } else {
      operator = '?';
    }
    return (
      <>
        {calcOperator.substring(0, 3).toUpperCase()} &nbsp;-&gt;&nbsp;
        <input value={this.state.left}  onChange={(e)=>this.calculator('L', e)} />  &nbsp;{operator}&nbsp;
        <input value={this.state.right} onChange={(e)=>this.calculator('R', e)} />  &nbsp;=&nbsp; 
        {this.state.calc}
        <br/>
      </>
    );
  }

}

export default Class1;