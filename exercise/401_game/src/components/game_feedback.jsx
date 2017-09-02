function getSymbol(value){
  if(value === 1) return 'O';
  if(value === -1) return 'X';
  return ' ';
}

var Game = React.createClass({
  getInitialState: function() {
    return {
      player: 1,
      winner: 0,
      grids: [0,0,0,0,0,0,0,0,0],
    };
  },

  setGrid: function(idx){
    var player = this.state.player;
    var grids = this.state.grids.slice();

    if(grids[idx] !== 0) return;
    if(this.state.winner !== 0) return;

    grids[idx] = player;
    player = -player;
    var winner = this.getWinner(grids);

    this.setState({
      grids: grids,
      player: player,
      winner: winner,
    });
  },

  getWinner: function(grids){
    // var sums =[0,0,0,0,0,0,0,0];
    // for(var i=0; i < 3; i++){
    //   sums[1] += grids[i];
    //   sums[2] += grids[i+3];
    //   sums[3] += grids[i+6];
    //   sums[4] += grids[i*3];
    //   sums[5] += grids[i*3+1];
    //   sums[6] += grids[i*3+2];
    //   sums[7] += grids[i*4];
    //   sums[8] += grids[i*2+2];
    // };
    // return sums.reduce(function(winner, sum){
    //   if(winner !== 0) return winner;
    //   if(sum === 3) return 1;
    //   if(sum === -3) return -1;
    //   return 0;
    // }, 0);

    var lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for(var i=0; i < 8; i++){
      var line = lines[i];
      var sum = grids[line[0]] + grids[line[1]] + grids[line[2]];
      if(sum === 3) return 1;
      if(sum === -3) return -1;
    }
    return 0;
  },

  reset: function(){
    this.setState(this.getInitialState());
  },

  render: function() {
    var setGrid = this.setGrid;
    return (
      <div>
        <div className='board'>
          {this.state.grids.map(function(value, idx){
            return (
              <div
                className='grid'
                key={idx}
                onClick={function(){
                  setGrid(idx);
                }}
              >
                {getSymbol(value)}
              </div>
            )
          })}
        </div>
        <div>Player: {getSymbol(this.state.player)}</div>
        <div>Winner: {getSymbol(this.state.winner)}</div>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }

});

module.exports = Game;
