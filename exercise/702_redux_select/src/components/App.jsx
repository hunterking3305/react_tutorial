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
    // code here...
  };
}

module.exports = // code here...
