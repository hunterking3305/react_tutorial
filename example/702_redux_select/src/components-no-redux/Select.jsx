var Select = React.createClass({
  onChange:function(e){
    this.props.setValue(e.target.value);
  },
  render:function() {
    return (
      <select value={this.props.value} onChange={this.onChange}>
        {this.props.options.map(function(value, index){
          return (
            <option key={value} value={index}>{value}</option>
          );
        })}
      </select>
    );
  }
})

module.exports = Select;
