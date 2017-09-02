var CommentInput = React.createClass({
  onSubmit : function (e) {
      e.preventDefault();
      var author = this.refs.author.value;
      var text = this.refs.text.value;
      this.props.addItem(author, text)
      this.refs.text.value = ''
  },
  render:function(){
    return (
      <form className='comment-input' onSubmit={this.onSubmit}>
        <input className='author' type='test' placeholder='name' ref='author'/>
        <input className='text' type='text' placeholder='text' ref='text'/>
        <input className='submit' type='submit'/>
      </form>
    );
  }
});
module.exports = CommentInput;
