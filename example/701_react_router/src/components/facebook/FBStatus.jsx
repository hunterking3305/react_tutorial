require('./fbStatus.scss');

var Profile = require('./Profile.jsx');
var loadingImg = require('img/fb-loading.gif');

var FBStatus = React.createClass({
  getInitialState: function() {
    return {
      status: 'loading'
    };
  },
  componentDidMount: function() {
    FB.init({
      appId  : '1743219825918021',
      xfbml  : false,
      version: 'v2.6'
    });
    FB.getLoginStatus(this.loginStatus);
  },
  login:function(){
    this.setState({status:'loading'});
    FB.login(this.loginStatus);
  },
  loginStatus:function(rs){
    if(rs.status==='connected'){
      this.setState({status:'connected'});
    }else{
      this.setState({status:'not-connected'});
    }
  },
  getElement:function(){
    switch(this.state.status){
      case 'loading':
        return (
          <img
            className='fbstatus-loading'
            src={loadingImg}
            />
        );

      case 'not-connected':
        return (
          <button
            className='fbstatus-login'
            onClick={this.login}
            >
            Connect Facebook
          </button>
        );

      case 'connected':
      default:
        return <Profile/>;
    }
  },
  render:function(){
    return(
      <div className='fbstatus'>
        <h1>會員登入</h1>
        {this.getElement()}
      </div>
    );

  }
});
module.exports = FBStatus;
