require('./content.scss');

var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Content = React.createClass({
  // getInitialState: function() {
  //   return {
  //     transition: 'left'
  //   };
  // },
  // componentWillReceiveProps: function(nextProps) {
  //   if(nextProps.page.id > this.props.page.id){
  //     this.setState({transition:'left'});
  //   }else{
  //     this.setState({transition:'right'});
  //   }
  // },
  render:function(){
    return (
      <div className='content-container'>
        {/* code here... */}
          <div className='content' key={this.props.page.id}>
            {this.props.page.content}
          </div>

      </div>
    );
  }
});

module.exports = Content;
