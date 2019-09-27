import React from 'react'
import './Page1.scss'
import img from './images/img.jpg';

class Page1 extends React.Component{
  render() {
    return (
      <div className="page1">
        this is page1 !
        <img src={img} alt="图片"/>
      </div>
    )
  }
}

export default Page1;
