var App = function(props) {
  return (
    <div className='app'>
      <h1>{props.title}</h1>
    </div>
  );
};

ReactDOM.render(
  <App title='Hello!'/>,
  document.getElementById('example')
);
