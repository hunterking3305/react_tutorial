var data = [
  '學會 JavaScript',
  '學會 React',
  '寫出超讚的網頁'
];

var List = React.createClass({
  render:function(){
    return (
      <ol className="list">
        {data.map(function(text){
          return <li>{text}</li>
        })}
      </ol>
    );
  }
});

ReactDOM.render(
  <List/>,
  document.getElementById('example')
);
