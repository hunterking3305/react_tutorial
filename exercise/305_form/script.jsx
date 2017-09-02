var MyForm = React.createClass({
  getInitialState: function() {
    return {name: ''};
  },
  setName:function(evt){
    this.setState({name:evt.target.value});
  },
  onSubmit:function(e){
    e.preventDefault();
    var data = {
      name: this.state.name,
      mobile: this.refs.tel.value
    }
    alert(JSON.stringify(data,null,'  '));
  },
  render: function() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        <h1>意見回饋表</h1>

        <label>姓名: </label>
        {/* Controlled Component */}
        <input
          type='text'
          placeholder='您的大名'
          value={this.state.name}
          onChange={this.setName}

          />
        <br/>

        <label>電話: </label>
        {/* Uncontrolled Component */}
        <input
          type='text'
          placeholder='您的電話'
          ref='tel'

          />
        <br/>

        <input type='submit' value='送出'/>
      </form>
    );
  }
});

ReactDOM.render(
  <MyForm/>,
  document.getElementById('example')
);
