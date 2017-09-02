// code here...

var MyComponent = React.createClass({
  render : function(){
    return (
      <div className='my-component'>
        hello, leoking
      </div>
    )
  }
});

ReactDOM.render(
  <MyComponent/>,
  document.getElementById('example')
);
