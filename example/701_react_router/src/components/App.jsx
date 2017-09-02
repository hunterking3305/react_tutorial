require('./app.scss');

var Menu = require('./Menu.jsx');
var Content = require('./Content.jsx');

var pages = [
  {id:1, path:'/scroll'  , label:'產品列表', component:require('scroll/Scroll')},
  {id:2, path:'/fbstatus', label:'會員登入', component:require('facebook/FBStatus')},
  {id:3, path:'/form'    , label:'聯絡我們', component:require('form/MyForm')}
];

var App = React.createClass({
  getInitialState: function() {
    return {
      page: null
    };
  },
  componentWillMount: function() {
    this.setPageByPath(this.props.location.pathname);
  },
  componentWillReceiveProps: function(nextProps) {
    this.setPageByPath(nextProps.location.pathname);
  },
  setPageByPath:function(path){
    var page = pages.filter(function(p){return p.path===path})[0];
    if(!!page) this.setState({page:page});
  },
  render: function() {
    return (
      <div className='app'>
        <Menu pages={pages}/>
        <Content page={this.state.page} component={this.props.children}/>
      </div>
    );
  }
});

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var history = ReactRouter.hashHistory;

var AppWrapper = function(){
  return (
    <Router history={history}>
      <Route path='/' component={App}>
        {pages.map(function(page){
          return <Route path={page.path} component={page.component}/>;
        })}
      </Route>
    </Router>
  );
};

module.exports = AppWrapper;
