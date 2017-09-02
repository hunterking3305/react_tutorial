//code here :)
{/*this is JSX qwd*/}

var TodoInput = React.createClass({
  // control input //
  getInitialState: function() {
    return {
      text:'',
    };
  },
  onChange : function(e){
    this.setState({text : e.target.value})
  },
  onSubmit : function(e) {
    // listen event no work
    e.preventDefault()
    // var text = this.refs.ipt.value

    this.props.addItem(this.state.text)
    this.setState({text : ''})
  },
  render: function() {
    // control Component/Input/Element
    return (
      <form className='todo-input' onSubmit={this.onSubmit}>
        <input
          type='text'
          value={this.state.text}
          onChange={this.onChange}
        />
      </form>
    )
  }
})

var TodoItem = React.createClass({
  getDefaultProps: function(){
    return {
      done : false,
      children : ''
    };
  },
  onClick : function() {
    this.props.toggleDone(this.props.id)
  },
  render: function() {
    var className = 'todo-item'
    if(this.props.done){
      className += ' done'
    }

    return (
      <li className={className} onClick={this.onClick}>
        {this.props.children}
      </li>
    )
  }
})

var TodoList = React.createClass({

  render: function() {
    // console.log(this)
    var toggleDone = this.props.toggleDone;
    return (
      <ul className='todo-list'>
        {
          this.props.data.map(function(item){
            return (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  done={item.done}
                  toggleDone={toggleDone}
                >
                  {item.text}
                </TodoItem>
            )
          })
        }
      </ul>
    )
  }
})

var Todo = React.createClass({
  getDefaultProps: function() {
    return {
      initialData : []
    };
  },
  getInitialState: function() {
    return {
      data : this.props.initialData,
    };
  },
  addItem : function(text) {

    var id = this.state.data.length + 1
    var newData = this.state.data.concat({
      id :id,
      done: false,
      text: text
    })
    this.setState({data : newData})
  },
  toggleDone : function(id) {
    // no mutation
    var newData = this.state.data.map(function(item) {
        if(item.id !== id) return item
        return {
          id : item.id,
          text : item.text,
          done : !item.done
        }
    })
    this.setState({data : newData})

    // var data =this.state.data;
    // for(var i=0; i< data.length; i++){
    //   var item = data[i];
    //   if(item.id === id){
    //     item.done = !item.done;
    //     break;
    //   }
    // }
    // this.forceUpdate()
  },
  save: function(){
      localStorage['todolist'] = JSON.stringify(this.state.data)
  },
  load: function(){
    var data = JSON.parse(localStorage['todolist'])
    this.setState({data:data})
  },
  render: function() {
    return (
      <div className="todo">
        <div>
          <button onClick={this.save}>Save</button>
          <button onClick={this.load}>Load</button>
        </div>
        <TodoInput addItem={this.addItem}/>
        <TodoList data={this.state.data} toggleDone={this.toggleDone}/>
      </div>
    )
  }
})

var dataArray = [
  {id: 1, done: true, text: 'AA'},
  {id: 2, done: false, text: 'BB'},
  // {id: 3, done: false, text: 'CC'},
  // {id: 4, done: false, text: 'DD'},
]

ReactDOM.render(
  <Todo initialData={dataArray}/>,
  document.getElementById('content')
);
