var PokeItem = React.createClass({
    render : function() {
        return(
            <tr>
                <td>{this.props.pokeName}</td>
                <td>{this.props.pokeScore}</td>
            </tr>
        )
    }
})
var PokeList = React.createClass({
    render : function(){
        // console.log(this)
        return(
            <div>
                <button onClick={this.props.orderByScore}>排序</button>
                <table>
                    {
                        this.props.pokeList.map(function(poke){
                            // console.log(poke)
                            return(
                                <PokeItem
                                    pokeName={poke.pokeName}
                                    pokeScore={poke.pokeScore}
                                />
                            )
                        })
                    }
                </table>
            </div>
        )
    }
})
var PokeInput = React.createClass({
    getInitialState : function() {
        return{
            initPokeName : '',
            initPokeScore : 0
        }
    },
    onChangeName : function(e) {
        this.setState({initPokeName : e.target.value})
    },
    onChangeScore : function(e) {
        this.setState({initPokeScore : e.target.value})
    },
    onSubmit : function(e) {
        // console.log(this.state)
        e.preventDefault()
        this.props.addPoke(this.state.initPokeName, this.state.initPokeScore)
        this.setState({
            initPokeName : '',
            initPokeScore : 0
        })
    },
    render : function() {
        // console.log(this)
        return(

            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    value={this.state.initPokeName}
                    onChange={this.onChangeName}
                />
                <input
                    type="text"
                    value={this.state.initPokeScore}
                    onChange={this.onChangeScore}
                />
                <input type="submit"/>
            </form>

        )
    }
})
var Poke = React.createClass({
    getDefaultProps : function() {

        return{
            initPokeList : [
                {id : 1503635917213, pokeName : '小火龍', pokeScore : 86},
                {id : 1503635917214, pokeName : '可達鴨', pokeScore : 97}
            ]
        }
    },
    getInitialState : function() {

        return{
            initPokeListState : this.props.initPokeList
        }
    },
    addPoke : function(nameText, scoreNum){
        // alert(nameText + ' ---> ' + String(scoreNum))
        var newPokeListState = this.state.initPokeListState.concat({
            id : Date.now(),
            pokeName : nameText,
            pokeScore : scoreNum
        })
        this.setState({initPokeListState : newPokeListState})
    },
    orderByScore : function() {

        this.state.initPokeListState.sort(function(first, second) {
            return second.pokeScore - first.pokeScore
        })
        this.setState(this.state.initPokeListState)
    },
    render : function(){
        // console.log(this)
        return (
            <div className="Poke">
                <h1>Poke!!!</h1>
                <PokeInput addPoke={this.addPoke}/>
                {/*<PokeList pokeList={this.props.initPokeList}/>*/}
                <PokeList
                    pokeList={this.state.initPokeListState}
                    orderByScore={this.orderByScore}
                />
            </div>
        )
    }
})

ReactDOM.render(
    <Poke/>,
    document.getElementById('example')
)
