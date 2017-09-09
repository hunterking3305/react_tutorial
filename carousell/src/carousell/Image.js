import React, { PropTypes } from 'react'
import './Image.css'

class Image extends React.Component {
  prev = () => {
    const {setIdx, currentIdx, imgs} = this.props;
    let idx = currentIdx - 1;
    if(idx < 0) idx = imgs.length - 1;
    setIdx(idx);
  }
  next = () => {
    const {setIdx, currentIdx, imgs} = this.props;
    let idx = currentIdx + 1;
    if(idx >= imgs.length) idx = 0;
    setIdx(idx);
  }
  render () {
    const {imgs, currentIdx} = this.props;
    return (
      <div className='img-container'>
        <button
          className='btn-prev'
          onClick={this.prev}
        >
          {'<'}
        </button>
        {imgs.map((img, idx)=>{
          let className = 'img';
          if(idx < currentIdx){
            className += ' left';
          }else if(idx > currentIdx){
            className += ' right';
          }
          return (
            <img
              className={className}
              src={img}
              key={img}
            />
          );
        })}
        <button
          className='btn-next'
          onClick={this.next}
        >
          {'>'}
        </button>
      </div>
    )
  }
}

export default Image;
