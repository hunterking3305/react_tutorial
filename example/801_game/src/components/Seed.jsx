require('Seed.scss');

var cx = require('cx');

var Seed = function(props) {
  var planting = props.planting;
  var plant = props.plant;

  var className = cx({
    seed: true,
    planting: plant.equals(planting),
    cantbuy: plant.get('buy') > props.money
  })

  return (
    <div
      className={className}
      onClick={function(){
        props.setPlanting(plant)
      }}
      >
      <div className='seed-img'/>
      <div className='seed-info'>
        <div className='name'>{plant.get('name')}</div>
        <div className='tag'>
          <div className='label'>買價</div>
          <div className='value'>{plant.get('buy')}</div>
        </div>
        <div className='tag'>
          <div className='label'>賣價</div>
          <div className='value'>{plant.get('sell')}</div>
        </div>
        <div className='tag'>
          <div className='label'>成熟</div>
          <div className='value'>{plant.get('mature')}</div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state){
  return {
    planting: state.get('planting'),
    money: state.get('money'),
  }
}

function mapDispatchToProps(dispatch){
  return {
    setPlanting:function(plant){
      dispatch({
        type: 'SET_PLANTING',
        plant: plant
      });
    }
  }
}

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Seed);
