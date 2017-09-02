require('battle.scss')
var Battle = React.createClass({
    render : function() {
        console.log(this)
        return(
            <div>
                <table>
                  <tr>
                    <td onClick={this.props.playerStatus} className="grid" id="t_0">{this.props.locate[0]}</td>
                    <td onClick={this.props.playerStatus} className="grid" id="t_1">{this.props.locate[1]}</td>
                    <td onClick={this.props.playerStatus} className="grid" id="t_2">{this.props.locate[2]}</td>
                  </tr>
                  <tr>
                    <td onClick={this.props.playerStatus} className="grid" id="t_3">{this.props.locate[3]}</td>
                    <td onClick={this.props.playerStatus} className="grid" id="t_4">{this.props.locate[4]}</td>
                    <td onClick={this.props.playerStatus} className="grid" id="t_5">{this.props.locate[5]}</td>
                  </tr>
                  <tr>
                    <td onClick={this.props.playerStatus} className="grid" id="t_6">{this.props.locate[6]}</td>
                    <td onClick={this.props.playerStatus} className="grid" id="t_7">{this.props.locate[7]}</td>
                    <td onClick={this.props.playerStatus} className="grid" id="t_8">{this.props.locate[8]}</td>
                  </tr>
                </table>
                <ul>
                    <li>Player:{this.props.player === 1 ? "o" : "x"}</li>
                    <li>Winner:{this.props.winner}</li>
                </ul>
            </div>
        )
    }
})

module.exports = Battle;
