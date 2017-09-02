function cx(obj){
  return Object.keys(obj).filter(function(key){
    return obj[key];
  }).join(' ');
}

var Item = React.createClass({
  addItem:function(){
    this.props.addItem(this.props.title);
  },
  render:function(){
    var className = cx({
      'item': true,
      'left':  this.props.id < this.props.currentId,
      'right': this.props.id > this.props.currentId
    });
    return (
      <div className={className}>
        <div className='title'>{this.props.title}</div>
        <div className='img'/>
        <div className='submit'/>
      </div>
    );
  }
});


var Nav = React.createClass({
  activate:function(){
    this.props.setCurrentId(this.props.id);
  },
  render:function(){
    var className = cx({
      'nav': true,
      'active': this.props.id === this.props.currentId
    });
    return (
      <div className={className} onClick={this.activate}>
        {this.props.title}
      </div>
    );
  }
});


var App = React.createClass({
  getInitialState: function() {
    return {
      items: [
        {id: 1, title:'涼感內衣'},
        {id: 2, title:'涼感內褲'},
        {id: 3, title:'涼感皮帶'},
        {id: 4, title:'茶葉蛋'},
      ],
      currentId: 1
    };
  },
  setCurrentId:function(id){
    this.setState({currentId:id});
  },

  render: function() {
    return (
      <div className='app'>

        <div className='navbar'>
          {this.state.items.map(function(item){
            return (
              <Nav
                key={'nav'+item.id}
                currentId={this.state.currentId}
                setCurrentId={this.setCurrentId}
                {...item}
                />
            );
          }.bind(this))}
        </div>

        <div className='items'>
          {this.state.items.map(function(item){
            return (
              <Item
                key = {"item"+item.id}
                currentId = {this.state.currentId}
                {...item}
                />
            );
          }.bind(this))}
        </div>

      </div>
    );
  }
});


ReactDOM.render(
  <App/>,
  document.getElementById('content')
);
