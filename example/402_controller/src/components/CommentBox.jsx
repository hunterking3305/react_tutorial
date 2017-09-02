var CommentInput = require('CommentInput');
var CommentList = require('CommentList');

var CommentBox = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data
    };
  },
  addComment:function(comment){
    comment.id = this.state.data.length + 1;
    var data = this.state.data.concat(comment);
    this.setState({data:data});
  },
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
