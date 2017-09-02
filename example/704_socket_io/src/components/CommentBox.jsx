var CommentInput = require('CommentInput');
var CommentList = require('CommentList');

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.socket = io(this.props.url);
    this.socket.on('data', this.dataGet);
  },
  dataGet:function(data){
    this.setState({data:data});
  },
  addComment:function(comment){
    this.socket.emit('input',comment);
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
