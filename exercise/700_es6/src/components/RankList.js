import React, {Component} from 'react';
import './RankList.styl';

class RankList extends Component{
  /* code here.







  */

  componentDidMount() {
    this.setState({loading: true},()=>{
      fetch(this.props.url)
      .then(rs=>rs.json())
      .then(ranking=>{
        this.setState({
          loading: false,
          ranking,
        })
      })
    });
  }

  expand(){
    this.setState({expand:true});
  }

  render() {
    /* code here...
    */
    const list = ranking.slice(0, expand?-1:20);

    return (
      <div id='app'>
        <div className='header'>目前排名</div>
        <div className={loading?'loading':'d-none'}>Loading...</div>
        <div className={loading?'d-none':'board'}>
          <ol className='list'>
            {list.map((streamer, idx)=>(
              <li className='streamer' key={streamer.userID}>
                <div className='num'>{idx+1}</div>
                <div className='picture' style={{
                  backgroundImage: `url('${url}${streamer.picture}')`
                }}/>
                <div className='name'>{streamer.openID}</div>
                <div className='score'>{streamer.score.toLocaleString()} 分</div>
              </li>
            ))}
          </ol>
          <div className='expand' onClick={this.expand}>展開全部</div>
        </div>
      </div>
    );
  }
}

export default RankList;
