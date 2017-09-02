require('index.html')
require('style.scss')
var CommentBox = require('CommentBox.jsx')

// var data = [
//   {id:1, author:'某甲', text:'我有一支筆'},
//   {id:2, author:'某乙', text:'我有一顆蘋果'},
// ];
var url = 'https://comment-server-scars377.c9users.io/'
ReactDOM.render(
  <CommentBox url={url}/>,
  document.getElementById('content')
);
