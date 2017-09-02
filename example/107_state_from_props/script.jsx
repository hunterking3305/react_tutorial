var Counter = React.createClass({
  getDefaultProps: function() {
    return {
      title: "預設標題",
      start: 0
    };
  },
  getInitialState: function() {
    return {
      count: parseInt(this.props.start, 10)
    };
  },
  addCount:function(){
    this.setState({
      count: this.state.count+1
    });
  },
  render:function(){
    return (
      <div className="counter">
        <div className='title'>{this.props.title}</div>
        <div className='count'>{this.state.count}</div>
        <button onClick={this.addCount}>+1</button>
      </div>
    );
  }
});

ReactDOM.render(
  <Counter/>,
  document.getElementById('example1')
);

ReactDOM.render(
  <Counter title="計數器" start="100"/>,
  document.getElementById('example2')
);
