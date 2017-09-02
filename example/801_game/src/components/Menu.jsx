require('Menu.scss');

var Seed = require('Seed');
var plants = Immutable.fromJS(require('plants'));

var Menu = function(props) {
  return (
    <div className='menu'>
      <div className='menu-passday'>Day {props.day}</div>
      <div className='menu-money'>$ {props.money}</div>
      <div className='menu-seeds'>
        {plants.map(function(plant){
          return <Seed key={plant.id} plant={plant}/>;
        })}
      </div>
      <div
        className='menu-passday'
        onClick={props.passDay}
        >
        Next Day
      </div>
    </div>
  );
};

function mapStateToProps(state){
  return {
    day: state.get('day'),
    money: state.get('money'),
  };
}

function mapDispatchToProps(dispatch){
  return {
    passDay:function(){
      dispatch({type: 'PASS_DAY'});
    }
  };
}


module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Menu);
