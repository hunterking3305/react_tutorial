var Counter = React.createClass({
  getDefaultProps: function() {
    return {title: "預設標題"};
  },
  getInitialState: function() {
    return {count: 0};
  },
  render:function(){
    return (
      <div className="counter">
        <div className='title'>{this.props.title}</div>
        <div className='count'>{this.state.count}</div>
      </div>
    );
  }
});

ReactDOM.render(
  <Counter/>,
  document.getElementById('example')
);
