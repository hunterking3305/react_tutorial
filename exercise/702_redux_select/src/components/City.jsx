function mapStateToProps(state){
  return {
    value: state.selectedCityIndex,
    options: state.cities.map(function(city){
      return city.name;
    })
  };
}

function mapDispatchToProps(dispatch){
  return {
    onChange: function(e){
      dispatch({type: 'SET_CITY_INDEX', value: e.target.value});
    }
  }
}

var Select = require('Select');

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Select);
