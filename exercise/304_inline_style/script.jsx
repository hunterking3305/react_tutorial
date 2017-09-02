var App = React.createClass({
  getInitialState: function() {
    return {
      color: 'white',
      colors: ['white','red','blue','green','yellow','cyan']
    };
  },
  setColor:function(e){
    this.setState({
      color:e.target.getAttribute('data-color')
    });
  },
  render: function() {
    return (
      <div className='app'>
        <div className='nav'>
          {this.state.colors.map(function(c){
            return(
              <span key={c} data-color={c} onClick={this.setColor}>
                {c}
              </span>
            );
          }.bind(this))}
        </div>
        <div className='canvas' style={/*
          code here...
        */} />
      </div>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('example')
);
