var CommentInput = require('CommentInput');
var CommentList = require('CommentList');

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  // code here...









  render:function(){
    return (
      <div className='comment-box'>
        <h1>{this.props.title}</h1>
        <CommentList data={this.state.data}/>
        <CommentInput addComment={this.addComment}/>
      </div>
    );
  }
});
module.exports = CommentBox;
