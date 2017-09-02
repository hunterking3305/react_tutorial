var CommentInput = require('CommentInput');
var CommentList = require('CommentList');

var CommentBox = React.createClass({
  render:function(){
    return (
      <div className='comment-box'>
        <h1>{this.props.title}</h1>
        <CommentList data={this.props.data}/>
        <CommentInput/>
      </div>
    );
  }
});
module.exports = CommentBox;
