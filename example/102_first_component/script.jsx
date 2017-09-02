var MyComponent = React.createClass({

  // 1. need render
  // 2. value need function
  render:function(){

    // must be return on JSX
    return (
      // please inside one div or span or others...
      <div className="my-component">
        這是一個組件
      </div>
    );
  }
});

ReactDOM.render(
  <MyComponent/>,
  document.getElementById('example')
);
