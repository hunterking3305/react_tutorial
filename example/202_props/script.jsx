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
        <TodoItem done={false}>買一瓶醬油</TodoItem>
        <TodoItem done={true}>買六個雞蛋</TodoItem>
      </ul>
    );
  }
});

var Todo = React.createClass({
  render: function() {
    return (
      <div className="todo">
        <h1>這是一個待辦清單</h1>
        <TodoInput/>
        <TodoList/>
      </div>
    );
  }
});


ReactDOM.render(
  <Todo />,
  document.getElementById('content')
);
