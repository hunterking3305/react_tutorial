var InitComponent = React.createClass({
  /* Initialization */
  getDefaultProps: function() {
    console.log('getDefaultProps');
    return {
      title: 'default title',
      content: 'default content'
    }
  },
  getInitialState: function() {
    console.log('getInitialState');
    return {
      count: 1
    }
  },
  componentWillMount: function() {
    console.log('componentWillMount');
  },
  componentDidMount: function() {
    console.log('componentDidMount');
  },


  /* Props Change */
  componentWillReceiveProps: function(nextProps) {
    console.log('componentWillReceiveProps');
  },

  /* State Change */
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  },
  componentWillUpdate: function(nextProps, nextState) {
    console.log('componentWillUpdate');
  },
  componentDidUpdate: function(prevProps, prevState) {
    console.log('componentDidUpdate');
  },


  componentWillUnmount: function() {
    console.log('componentWillUnmount');
  },


  changeState:function(){
    console.log('--- Change State ---');
    this.setState({count: this.state.count+1});
  },

  render:function(){
    console.log('render');
    return (
      <div className='init'>
        <h1>{this.props.title}</h1>
        <div className='content'>{this.props.children}</div>
        <div className='count'>{this.state.count}</div>
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      content: 'Some Content'
    };
  },
  changeProps:function(){
    console.log('--- Change Props ---');
    this.setState({content: this.state.content+'!'})
  },
  render:function(){
    return (
      <div className="app">
        <InitComponent>{this.state.content}</InitComponent>
        <button onClick={this.changeProps}>Change Props</button>
      </div>
    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('example')
);
