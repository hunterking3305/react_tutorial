require('facebook.html');
require('common.scss');

var FBStatus = require('facebook/FBStatus.jsx');

ReactDOM.render(
  <FBStatus/>,
  document.getElementById('content')
);
