require('./app.scss');

var Menu = require('./Menu.jsx');
var Content = require('./Content.jsx');

var pages = [
  {id:1, {/* code here... */}, label:'產品列表', component:require('scroll/Scroll')},
  {id:2, {/* code here... */}, label:'會員登入', component:require('facebook/FBStatus')},
  {id:3, {/* code here... */}, label:'聯絡我們', component:require('form/MyForm')}
];

var App = React.createClass({
  getInitialState: function() {
    return {
      page: null
    };
  },
  // code here...









  render: function() {
    return (
      <div className='app'>
        {/* code here... */}

      </div>
    );
  }
});

// code here...














module.exports = AppWrapper;
