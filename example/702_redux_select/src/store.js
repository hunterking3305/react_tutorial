var zipcode = require('zipcode');

var initialState = {
  cities: zipcode,
  selectedCityIndex: 0,
  dists: zipcode[0].dist,
  selectedDistIndex: 0
};

function reducer(state, action){
  switch(action.type){
    case 'SET_CITY_INDEX':
      return Object.assign({}, state, {
        selectedCityIndex: action.value,
        dists: state.cities[action.value].dist,
        selectedDistIndex: 0
      });

    case 'SET_DIST_INDEX':
      return Object.assign({}, state, {
        selectedDistIndex: action.value
      });

    default:
      return state
  }
}

module.exports = Redux.createStore(reducer, initialState);
