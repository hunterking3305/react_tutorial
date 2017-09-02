require('index.html');
require('style.scss');

var CommentBox = require('CommentBox');

ReactDOM.render(
  <CommentBox
    title="React 留言版"
    url="https://comment-server-scars377.c9users.io/"
    />,
  document.getElementById('content')
);
// https://ide.c9.io/scars377/comment-server
