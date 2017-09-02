require('./profile.scss');

var anonymousImg = require('img/anonymous.jpg');

var Profile = React.createClass({
  getInitialState: function() {
    return {
      picture: anonymousImg,
      name: ' '
    };
  },
  // code here...


  profileGet:function(rs){
    this.setState({
      picture: rs.picture.data.url,
      name: rs.name
    });
  },
  logout:function(){
    FB.api('/me/permissions', 'DELETE', function(){
      window.location.reload();
    });
  },
  render:function(){
    return(
      <div className='profile'>
        <img className='picture' src={this.state.picture}/>
        <div className='name'>{this.state.name}</div>
        <button onClick={this.logout}>登出</button>
      </div>
    );
  }
});
module.exports = Profile;
