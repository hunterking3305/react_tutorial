require('./menu.scss');

var cx = require('utils/cx');

var Menu = function(props){
  return (
    <div className='menu'>
      {props.pages.map(function(page){
        var className = cx({
          'menu-item': true,
          'active': page===props.page
        });
        var onClick = function(){
          props.setPage(page);
        };
        return (
          <a
            key={'menu-'+page.id}
            className={className}
            onClick={onClick}
            >
            {page.label}
          </a>
        );
      })}
    </div>
  );
};
module.exports = Menu;
