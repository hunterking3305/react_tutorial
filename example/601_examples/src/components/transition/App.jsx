require('./app.scss');

var Menu = require('./Menu.jsx');
var Content = require('./Content.jsx');

var pages = [
  {id:1, label:'Page1', content:'Page1 Content'},
  {id:2, label:'Page2', content:'Page2 Content'},
  {id:3, label:'Page3', content:'Page3 Content'}
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
