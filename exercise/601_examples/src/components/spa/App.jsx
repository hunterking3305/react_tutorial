require('./app.scss');

var Menu = require('./Menu.jsx');
var Content = require('./Content.jsx');

var pages = [
  // code here...


];

var App = React.createClass({
  getInitialState: function() {
    return {
      page: pages[0]
    }
  },
  setPage:function(page){
    this.setState({page:page});
  },
  render: function() {
    return (
      <div className='app'>
        <Menu
          pages={pages}
          page={this.state.page}
          setPage={this.setPage}
          />
        <Content page={this.state.page}/>
      </div>
    );
  }
});
module.exports = App;
