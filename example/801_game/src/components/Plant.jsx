require('Plant.scss');

var cx = require('cx');

var Plant = React.createClass({
  getInitialState: function() {
    return {
      className: 'plant empty',
      name: '',
      mature: -1
    };
  },
  componentWillReceiveProps: function(nextProps) {
    var plant = nextProps.plant;
    var isPlanting = !!nextProps.planting
    var empty = !plant;

    var state = this.getInitialState();

    if(!empty){
      state.name = plant.get('name');
      state.mature = Math.max( plant.get('plantDay') + plant.get('mature') - nextProps.day, 0 );
    }

    state.className = cx({
      plant: true,
      disabled: !empty && isPlanting,
      highlight: empty && isPlanting,
      empty: empty,
      mature: state.mature === 0
    });

    this.setState(state);

  },
  onClick:function(){
    if(!!this.props.planting){
      this.props.setPlant(this.props.idx);

    }else if(this.state.mature===0){
      this.props.sellPlant(this.props.idx);
    }
  },

  render: function() {
    return (
      <div className={this.state.className} onClick={this.onClick}>
        <div className='name'>{this.state.name}</div>
        <div className='mature'>{this.state.mature}</div>
      </div>
    );
  }

});

function mapStateToProps(state){
  return {
    day: state.get('day'),
    planting: state.get('planting'),
  };
}
function mapDispatchToProps(dispatch){
  return {
    setPlant:function(idx){
      dispatch({type:'SET_PLANT', idx:idx});
    },
    sellPlant:function(idx){
      dispatch({type:'SELL_PLANT', idx:idx});
    },
  };
}

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Plant);
