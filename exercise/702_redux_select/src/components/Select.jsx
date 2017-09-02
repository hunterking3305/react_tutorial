var Select = function(props) {
  return (
    <select value={props.value} onChange={props.onChange}>
      {props.options.map(function(value, index){
        return (
          <option key={value} value={index}>{value}</option>
        );
      })}
    </select>
  );
};

module.exports = Select;
