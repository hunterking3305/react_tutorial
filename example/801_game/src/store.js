var initialState = Immutable.Map({
  money: 100,
  day: 0,
  plants: Immutable.Repeat(null, 24).toList(),
  planting: null
});


function reducer(state, action){
  switch(action.type){
    case 'SET_PLANTING':
      var plant = action.plant.equals(state.get('planting')) ? null : action.plant;
      return state.set('planting', plant);

    case 'PASS_DAY':
      return state.set('day', state.get('day')+1);

    case 'SET_PLANT':
      var idx = action.idx;
      var plant = state.get('planting').set('plantDay', state.get('day'))
      var plants = state.get('plants').set(idx, plant);
      var money = state.get('money') - plant.get('buy');
      return state.merge({
        money: money,
        planting: null,
        plants: plants
      });

    case 'SELL_PLANT':
      var idx = action.idx;
      var plant = state.get('plants').get(idx);
      var plants = state.get('plants').set(idx, null);
      var money = state.get('money') + plant.get('sell');
      return state.merge({
        money: money,
        plants: plants
      });

    default:
      return state
  }
}

module.exports = Redux.createStore(reducer, initialState);
