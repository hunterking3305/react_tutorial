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
          <input type='button' value='button' disabled/>
          <input type='button' value='button' disabled={true}/>
          <br/>
          <input type='button' value='button'/>
          <input type='button' value='button' disabled={false}/>
          <br/>
          <input type='button' value='button' disabled='false'/>
        </div>

        <div className='section'>
          <h1>Expressions</h1>
          <div style={{color:'red'}}>red</div>
          <div>{window.innerWidth*.5}</div>
          <div>{window.login ? 'logged' : 'not logged in'}</div>
        </div>

        <div className='section'>
          <h1>Comments</h1>
            {/* 子節點註解, 要在外面包 {} */}
            <div
              className='comment' // 句尾註解
              /*
                多行
                註解
              */
            />
        </div>

        <div className='section'>
          <h1>Store JSX in Variables</h1>
          {node}
        </div>

        <div className='section'>
          <h1>Spread Attributes</h1>
          <div {...props}>...</div>
        </div>

        <div className='section'>
          <h1>HTML Entities</h1>
          <div>1 &lt; 2</div>
          <div>{'1 &lt; 2'}</div>
          <div>{'1 < 2'}</div>
          <div>{'<script>alert("you cannot inject")</script>'}</div>
        </div>

        <div className='section'>
          <h1>Custom Attributes</h1>
          <div weight='10'>10</div>
          <div data-weight='20'>20</div>
        </div>

        <div className='section'>
          <h1>Preserved Words</h1>
          <input type='checkbox' id='check'/>
          <label className='chk-label' htmlFor='check'>Checkbox</label>
        </div>

      </div>

    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('example')
);
