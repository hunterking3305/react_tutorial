// explain rules of component
var Agent = React.createClass({
  getDefaultProps: function() {
    return {
      img: 'default.jpg',
      name: '姓名',
      children: '發言'
    };
  },
  render:function(){
    return (
      <div className="agent">
        <img className="img" src={this.props.img}/>
        <div className="name">{this.props.name}</div>
        <div className="quote">{this.props.children}</div>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <h1>我們的客服</h1>
    <Agent img="Judi.jpg" name="Judi Anderson">我是 Judi, 您好!</Agent>
    <Agent img="John.jpg" name="John Stewart">去找 Judi 不要找我</Agent>
    <Agent/>
  </div>,
  document.getElementById("example")
);
