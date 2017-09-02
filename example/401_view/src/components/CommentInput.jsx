var CommentInput = React.createClass({
  render:function(){
    return (
      <form className='comment-input'>
        <input className='author' type='text' placeholder='名字' />
        <input className='text' type='text' placeholder='留言' />
        <input className='submit' type='submit' value='送出' />
      </form>
    );
  }
});
module.exports = CommentInput;
