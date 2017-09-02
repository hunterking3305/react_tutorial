function mapStateToProps(state){
  return {
    value: state.selectedDistIndex,
    options: state.dists.map(function(dist){
      return dist.name;
    })
  };
}

function mapDispatchToProps(dispatch){
  return {
    onChange: function(e){
      dispatch({type: 'SET_DIST_INDEX', value: e.target.value});
    }
  }
}

var Select = require('Select');

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Select);
