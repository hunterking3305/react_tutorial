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
        <div className='submit' onClick={this.addItem}/>
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


var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var App = React.createClass({
  getInitialState: function() {
    return {
      items: [
        {id: 1, title:'涼感內衣'},
        {id: 2, title:'涼感內褲'},
        {id: 3, title:'涼感皮帶'},
        {id: 4, title:'茶葉蛋'},
      ],
      currentId: 1,
      cart:[]
    };
  },
  setCurrentId:function(id){
    this.setState({currentId:id});
  },
  addItem:function(title){
    var cart = this.state.cart.concat(title);
    this.setState({cart:cart});
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
                addItem = {this.addItem}
                {...item}
                />
            );
          }.bind(this))}
        </div>

        <div className='cart-container'>
          <CSSTransitionGroup transitionName='example'>
            {this.state.cart.map(function(title, idx){
              return (
                <div key={'cart'+idx} className='cart-item'>
                  {title}
                </div>
              );
            }.bind(this))}
          </CSSTransitionGroup>
        </div>

      </div>
    );
  }
});


ReactDOM.render(
  <App/>,
  document.getElementById('content')
);
