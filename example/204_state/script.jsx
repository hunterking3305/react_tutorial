var TodoInput = React.createClass({
  render: function() {
    return (
      <div className="todo-input">
        我是輸入框
      </div>
    );
  }
});

var TodoItem = React.createClass({
  render: function() {
    var cn = "todo-item";
    if(this.props.done) cn += " done"

    return (
      <li className={cn}>
        {this.props.children}
      </li>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    return (
      <ul className="todo-list">
        {
          this.props.data.map(function(item){
            return (
              <TodoItem key={item.id} done={item.done}>
                {item.text}
              </TodoItem>
            );
          })
        }
      </ul>
    );
  }
});

var Todo = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.initialData
    };
  },
  render: function() {
    return (
      <div className="todo">
        <h1>採買清單</h1>
        <TodoInput/>
        <TodoList data={this.state.data}/>
      </div>
    );
  }
});

var data = [
  {id:1, done:false, text:'買一瓶醬油'},
  {id:2, done:true,  text:'買六個雞蛋'}
];

ReactDOM.render(
  <Todo initialData={data}/>,
  document.getElementById('content')
);
