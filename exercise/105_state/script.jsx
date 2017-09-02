var Counter = React.createClass({
  getDefaultProps: function() {
    return {
      title: "預設標題",
      initialCount : 0
    };
  },
  // code here...
  getInitialState : function(){
    return {
      count:parseInt(this.props.initialCount, 10)
      // count : 1
      // clickStatus : 1
    }
  },
  //self function
  addCount : function(){

    this.setState({
      count : this.state.count +1
      // count : this.state.count + this.state.clickStatus,
      // clickStatus : this.state.clickStatus + 1
    })
  },
  render:function(){
    return (
      <div className="counter">
        <div className='title'>{this.props.title}</div>
        <div className='count'>{this.state.count}</div>
        <button onClick={this.addCount}>click me !</button>
      </div>
    );

  }
});

ReactDOM.render(
  <div>
    <Counter/>
    <Counter initialCount={100}/>
  </div>,
  document.getElementById('example')
);
