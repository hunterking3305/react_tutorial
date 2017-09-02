var CommentInput = require('CommentInput');
var CommentList = require('CommentList');

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.get(this.props.url, this.setData, 'json');
  },
  addComment:function(comment){
    $.post(this.props.url, comment, this.setData, 'json');
  },
  setData:function(data){
    this.setState({data:data})
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
