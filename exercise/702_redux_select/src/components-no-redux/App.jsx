var Select = require('Select');
var zipcode = require('zipcode');

var App = React.createClass({
  getInitialState: function() {
    return {
      cities: zipcode,
      selectedCityIndex: 0,
      dists: zipcode[0].dist,
      selectedDistIndex: 0
    };
  },
  setCityIndex:function(value){
    this.setState({
      selectedCityIndex: value,
      dists: this.state.cities[value].dist,
      selectedDistIndex: 0
    });
  },
  setDistIndex:function(value){
    this.setState({
      selectedDistIndex: value
    });
  },
  render:function(){
    return (
      <div>
        <Select
          options={this.state.cities.map(function(city){return city.name})}
          value={this.state.selectedCityIndex}
          setValue={this.setCityIndex}
          />
        <Select
          options={this.state.dists.map(function(dist){return dist.name})}
          value={this.state.selectedDistIndex}
          setValue={this.setDistIndex}
          />
        <span>
          {this.state.dists[ this.state.selectedDistIndex ].zip}
        </span>
      </div>
    );
  }
})

module.exports = App;
