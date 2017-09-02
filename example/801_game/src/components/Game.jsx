require('Game.scss');

var Farm = require('Farm');
var Menu = require('Menu');

var Game = function() {
  return (
    <div className='game'>
      <Farm/>
      <Menu/>
    </div>
  );
};

module.exports = Game;
