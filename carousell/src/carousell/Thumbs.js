import React, { PropTypes } from 'react'

class Thumbs extends React.Component {
  render () {
    const {imgs, setIdx} = this.props;
    return (
      <div>
        {
          imgs.map(
            (img, idx) => (
              <img
                src={img}
                key={img}
                width='60'
                onClick={()=>setIdx(idx)}
              />
            )
          )
        }
      </div>
    )
  }
}

export default Thumbs;
