var CommentInput = require('CommentInput');
var CommentList = require('CommentList');

var CommentBox = React.createClass({
  getInitialState: function() {
    return {
      data: [],
    };
  },
  componentDidMount : function () {
    $.get(this.props.url, this.setData, 'json');
  },
  setData : function(data) {
      this.setState({data: data})
  },
  addItem: function(author, text) {
    $.post(this.props.url, {author : author, text: text}, this.setData, 'json')
  },
  render:function(){
    return (
      <div className='comment-box'>
        <h1>{this.props.title}</h1>
        <CommentList data={this.state.data}/>
        <CommentInput addItem={this.addItem}/>
      </div>
    );
  }
});
module.exports = CommentBox;
