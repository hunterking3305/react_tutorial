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
    return (
      <li className="todo-item">
        我是一個項目
      </li>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    return (
      <ul className="todo-list">
        我是項目列表
        <TodoItem/>
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
