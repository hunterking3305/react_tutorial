require('index.html');

var Provider = ReactRedux.Provider;
var store = require('store');
var Game = require('Game');

ReactDOM.render(
  <Provider store={store}>
    <Game/>
  </Provider>,
  document.getElementById('app')
);
