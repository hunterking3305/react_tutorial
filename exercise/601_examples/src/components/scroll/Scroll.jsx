require('./scroll.scss');

var Portrait = require('./Portrait.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {position: 0};
  },

  componentDidMount : function () {
    $(window).on('scroll', this.scroll)
  },

  componentWillUnmount : function () {
    $(window).off('scroll', this.scroll)
  },

  scroll(){
    this.setState({
      position : $(window).scrollTop() + $(window).height(),
    })
  },

  render: function() {
    var imgs = [];
    for(var i=1; i<=14; i++){
      imgs.push(
        <Portrait
          key={i}
          id={i}
          position={this.state.position}
        />
      );
    }
    return (
      <div className='scroll'>
        <h1>產品列表</h1>
        {imgs}
      </div>
    );
  }
});
module.exports = App;
