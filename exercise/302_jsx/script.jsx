var App = React.createClass({
  render: function() {
    var node = <div>hello</div>
    var props = {
      className: 'props-class',
      id: 'props-id',
      style: {
        backgroundColor: '#689'
      }
    }
    return (
      <div>

        <div className='section'>
          <h1>Boolean Attributes</h1>
          {/*code here...*/}
        </div>

        <div className='section'>
          <h1>Expressions</h1>
          {/*code here...*/}
        </div>

        <div className='section'>
          <h1>Comments</h1>
          {/*code here...*/}
        </div>

        <div className='section'>
          <h1>Store JSX in Variables</h1>
          {/*code here...*/}
        </div>

        <div className='section'>
          <h1>Spread Attributes</h1>
          {/*code here...*/}
        </div>

        <div className='section'>
          <h1>HTML Entities</h1>
          {/*code here...*/}
        </div>

        <div className='section'>
          <h1>Custom Attributes</h1>
          {/*code here...*/}
        </div>

        <div className='section'>
          <h1>Preserved Words</h1>
          {/*code here...*/}
        </div>

      </div>

    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('example')
);
