var City = require('City');
var Dist = require('Dist');

var App = function(props){
  return (
    <div>
      <City/>
      <Dist/>
      <span>{props.zip}</span>
    </div>
  );
};

function mapStateToProps(state){
  return {
    zip: state.dists[ state.selectedDistIndex ].zip
  };
}

module.exports = ReactRedux.connect(mapStateToProps)(App);
