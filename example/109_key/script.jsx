var Victim = React.createClass({
  componentWillUnmount: function() {
    alert('救起了' + this.props.name);
  },
  render:function(){
    return (
      <div className='victim' onClick={this.props.rescue}>
        {this.props.name}
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      victims: [ '媽媽', '女朋友', '不認識的正妹', 'React講師' ]
    };
  },
  rescue:function(idx){
    var victims = this.state.victims.slice();
    victims.splice(idx, 1);
    this.setState({victims:victims});
  },
  render:function(){
    var rescue = this.rescue;
    return (
      <div className='app'>
        <h2>這些人掉進河裡了! 要救誰上來?</h2>
        {this.state.victims.map(function(victim, idx){
          return (
            <Victim
              key={victim}
              name={victim}
              rescue={function(){rescue(idx)}}
            />
          );
        })}
      </div>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('example')
);
