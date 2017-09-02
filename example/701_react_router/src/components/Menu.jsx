require('./menu.scss');

var Link = ReactRouter.Link;

var Menu = function(props){
  return (
    <div className='menu'>
      {props.pages.map(function(page){
        return (
          <Link
            key={'menu-'+page.id}
            className='menu-item'
            activeClassName='active'
            to={page.path}
            >
            {page.label}
          </Link>
        );
      })}
    </div>
  );
};
module.exports = Menu;
