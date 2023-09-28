import React from 'react';

class ClassTemp extends React.Component {

  /** コンポーネント生成時処理  */
  constructor(props) {
    console.log('== call constructor');
    super(props);
    this.state = {
      title: props._title,
    };
  }

  /** props/stateの更新時の処理  */
  render() {
    console.log('== call render');
    return <h2>{this.state.title}</h2>;
  }


  /** コンポーネントがマウントされた直後処理 */
  componentDidMount() {
    console.log('== call componentDidMount');
  }

  /** 更新が行われた直後処理  */
  componentDidUpdate(prevProps, prevState) {
    console.log('== call componentDidUpdate');
    console.log(prevProps);
    console.log(prevState);
  }
  
  /** アンマウントされて破棄される直前処理 */
  componentWillUnmount() {
    console.log('== call componentWillUnmount');
  }

  /** 子孫コンポーネントによってエラーがスローされた後処理 */
  componentDidCatch(error, info) {
    console.log('== call componentDidCatch');
    console.log(error);
    console.log(info);
  }
}

export default ClassTemp;