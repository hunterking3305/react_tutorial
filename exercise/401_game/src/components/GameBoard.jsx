var Battle = require("Battle.jsx")

var GameBoard = React.createClass({
    getInitialState: function() {
        return {
            grids : [0, 0, 0, 0, 0, 0, 0, 0, 0],
            locate : ["", "", "", "", "", "", "", "", ""],
            player : 1,
            winner : ""
        };
    },
    playerStatus : function functionName(e) {

        var locateMarker = this.state.player === 1 ? "o" : "x"
        this.state.locate[Number(e.target.id.replace("t_", ""))] = locateMarker
        this.state.grids[Number(e.target.id.replace("t_", ""))] = this.state.player
        this.setState({
            locate : this.state.locate,
            grids : this.state.grids,
        })
        this.state.player === 1 ? this.setState({player : -1}) : this.setState({player : 1})

        if(this.state.grids.indexOf(0) === -1){
            alert("和局")
        }
        if((this.state.grids[0] === 1 && this.state.grids[1] === 1 && this.state.grids[2]) === 1 ){
            this.setState({winner : "o"})
        }
        if((this.state.grids[3] === 1 && this.state.grids[4] === 1 && this.state.grids[5]) === 1 ){
            this.setState({winner : "o"})
        }
        if((this.state.grids[6] === 1 && this.state.grids[7] === 1 && this.state.grids[8]) === 1 ){
            this.setState({winner : "o"})
        }
        if((this.state.grids[0] === 1 && this.state.grids[3] === 1 && this.state.grids[6]) === 1 ){
            this.setState({winner : "o"})
        }
        if((this.state.grids[1] === 1 && this.state.grids[4] === 1 && this.state.grids[7]) === 1 ){
            this.setState({winner : "o"})
        }
        if((this.state.grids[2] === 1 && this.state.grids[5] === 1 && this.state.grids[8]) === 1 ){
            this.setState({winner : "o"})
        }
        if((this.state.grids[0] === 1 && this.state.grids[4] === 1 && this.state.grids[8]) === 1 ){
            this.setState({winner : "o"})
        }
        if((this.state.grids[2] === 1 && this.state.grids[4] === 1 && this.state.grids[6]) === 1 ){
            this.setState({winner : "o"})
        }
        if((this.state.grids[0] === -1 && this.state.grids[1] === -1 && this.state.grids[2] === -1) ){
            this.setState({winner : "x"})
        }
        if((this.state.grids[3] === -1 && this.state.grids[4] === -1 && this.state.grids[5] === -1) ){
            this.setState({winner : "x"})
        }
        if((this.state.grids[6] === -1 && this.state.grids[7] === -1 && this.state.grids[8] === -1) ){
            this.setState({winner : "x"})
        }
        if((this.state.grids[0] === -1 && this.state.grids[3] === -1 && this.state.grids[6] === -1) ){
            this.setState({winner : "x"})
        }
        if((this.state.grids[1] === -1 && this.state.grids[4] === -1 && this.state.grids[7] === -1) ){
            this.setState({winner : "x"})
        }
        if((this.state.grids[2] === -1 && this.state.grids[5] === -1 && this.state.grids[8] === -1) ){
            this.setState({winner : "x"})
        }
        if((this.state.grids[0] === -1 && this.state.grids[4] === -1 && this.state.grids[8] === -1) ){
            this.setState({winner : "x"})
        }
        if((this.state.grids[2] === -1 && this.state.grids[4] === -1 && this.state.grids[6] === -1) ){
            this.setState({winner : "x"})
        }

    },
    render :function () {

        return (
            <div>
                <Battle
                    grids={this.state.grids}
                    winner={this.state.winner}
                    player={this.state.player}
                    locate={this.state.locate}
                    playerStatus={this.playerStatus}
                />
            </div>
        )
    }
})

module.exports = GameBoard;
