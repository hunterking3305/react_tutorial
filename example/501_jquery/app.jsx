var Item = React.createClass({
  getInitialState: function() {
    return {
      num: 2
    };
  },
  sub:function(){
    this.setState({num: this.state.num-1});
  },
  add:function(){
    this.setState({num: this.state.num+1});
  },
  componentDidUpdate: function(prevProps, prevState) {
    if(prevState.num != this.state.num){
      var obj = { scale: 2 };
      var num = $(this.refs.num);
      $(obj).animate({ scale: 1 }, { step: function () {
        num.css({ transform: 'scale(' + obj.scale + ')' });
      }});
    }
  },
  render:function(){
    return (
      <div className='item'>
        <div className='title'>涼感內衣</div>
        <div className='img'/>
        <div className='num-group'>
          <div className='btn btn-left' onClick={this.sub}/>
          <div className='num' ref='num'>{this.state.num}</div>
          <div className='btn btn-right' onClick={this.add}/>
        </div>
        <div className='submit'/>
      </div>
    );
  }
});


ReactDOM.render(
  <Item/>,
  document.getElementById('content')
);
