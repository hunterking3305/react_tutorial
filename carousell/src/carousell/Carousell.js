import React, { PropTypes } from 'react'
import Image from './Image';
import Thumbs from './Thumbs';

class Carousell extends React.Component {
  static defaultProps = {
    imgs: [],
    thumbs: true,
    autoplay: false,
  }

  state = {
    currentIdx: 0,
  }

  componentDidMount() {
    // this.timer = setTimeout(this.next, 3000);
    this.setIdx(0);
  }

  next = () => {
    const {imgs} = this.props;
    const {currentIdx} = this.state;
    let idx = currentIdx + 1;
    if(idx >= imgs.length) idx = 0;
    this.setIdx(idx);
  }

  setIdx = (idx) => {
    clearTimeout(this.timer);
    this.setState({currentIdx: idx});
    if(this.props.autoplay){
      this.timer = setTimeout(this.next, 3000);
    }
  }

  render () {
    const {imgs, thumbs} = this.props;
    const {currentIdx} = this.state;
    return (
      <div>
        <Image
          imgs={imgs}
          currentIdx={currentIdx}
          setIdx={this.setIdx}
        />
        {
          thumbs
            ? (
              <Thumbs
                imgs={imgs}
                setIdx={this.setIdx}
              />
            )
            : null
        }
      </div>
    );
  }
}

export default Carousell;
