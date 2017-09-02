require('index.html');
require('style.scss');

var CommentBox = require('CommentBox');

var data = [
  {id:1, author:'某甲', text:'我有一支筆'},
  {id:2, author:'某乙', text:'我有一顆蘋果'},
];
ReactDOM.render(
  <CommentBox title="留言版" data={data}/>,
  document.getElementById('content')
);
