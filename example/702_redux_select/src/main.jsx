require('index.html');

var Provider = ReactRedux.Provider;
var store = require('store');
var App = require('App');

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
