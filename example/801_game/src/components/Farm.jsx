require('Farm.scss');
var Plant = require('Plant');

var Farm = function(props) {
  return (
    <div className='farm'>
      <div className='farm-plants'>
        {props.plants.map(function(plant,i){
          return <Plant key={'plant'+i} idx={i} plant={plant} />;
        })}
      </div>
    </div>
  );
};

function mapStateToProps(state){
  return {
    plants: state.get('plants')
  }
}

module.exports = ReactRedux.connect(mapStateToProps)(Farm);
