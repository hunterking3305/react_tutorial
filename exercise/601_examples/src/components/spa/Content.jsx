require('./content.scss');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Content = React.createClass({
  getInitialState: function() {
    return {
      transition: 'left'
    };
  },
  componentWillReceiveProps: function(nextProps) {
    if(nextProps.page.id > this.props.page.id){
      this.setState({transition:'left'});
    }else{
      this.setState({transition:'right'});
    }
  },
  render:function(){
    // code here...
    return (
      <div className='content-container'>
        <ReactCSSTransitionGroup transitionName={this.state.transition}>
          <div className='content' key={this.props.page.id}>
            {/* code here... */}
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = Content;
