import React from 'react';
import logo from './logo.svg';
import './App.css';

// this is functional component
const Counter = ({count}) => {
  <div>
    {count}
  </div>
}

// 在 class component 與 createClass 之不同:
// 以下沒有這兩個 function
// getInitialState  -> 在建構子內設置
// getDefaultProps  -> 寫在 defaultProps

class App extends React.Component {

// ----- solution 1 ----- :
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     num : 0
  //   }
  //   this.onClick = this.onClick.bind(this);
  // }
  //
  // onClick(){
  //   this.setState({num : this.state.num + 1});
  // }
// ----- solution 1 ----- :

// ----- solution 2 ----- :
  static defaultProps = {
    title : 'Counter',
    initialCount : 0
  }

  constructor(props){
    super(props);
    this.state = {
      num : props.initialCount,
    }
  }

  onClick = () => {
    this.setState({num : this.state.num + 1});
  }
// ----- solution 2 ----- :

  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <h1>{this.state.num}</h1>
        <button onClick={this.onClick}>+1</button>
      </div>
    );
  }
}

// ----- solution 1 ----- :
// // static property
// App.defaultProps = {
//   title : 'Counter'
// }
// ----- solution 1 ----- :

export default App;
