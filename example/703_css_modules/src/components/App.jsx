var Content = require('Content');
var style = require('app.scss');

var App = React.createClass({

  render: function() {
    return (
      <div className='app'>
        <div className={style.item}>App Item</div>
        <Content/>
      </div>
    );
  }

});

module.exports = App;
