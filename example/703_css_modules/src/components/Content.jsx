var style = require('content.scss');

var Content = React.createClass({

  render: function() {
    return (
      <div className={style.content}>
        <div className={style.item}>Content Item</div>
      </div>
    );
  }

});

module.exports = Content;
