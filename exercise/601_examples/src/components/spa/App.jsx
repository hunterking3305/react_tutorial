require('./app.scss');

var Menu = require('./Menu.jsx');
var Content = require('./Content.jsx');

var pages = [
  {id:1, label:'產品列表', component:require('scroll/Scroll')},
  {id:2, label:'會員登入', component:require('facebook/FBStatus')},
  {id:3, label:'聯絡我們', component:require('form/MyForm')}
];

var App = React.createClass({
  getInitialState: function() {
    // const pageLabel = location.hash.replace('#','')
    // const pageLabel = location.href.split('/').pop()
    // const [page] = pages.filter(p=>p.label === pageLabel)
    return {
      page: pages[0]
    }
  },
  setPage:function(page){
    this.setState({page:page});
    // history.pushState({}, '', `${page.label}`)
    // location.hash = page.label
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
