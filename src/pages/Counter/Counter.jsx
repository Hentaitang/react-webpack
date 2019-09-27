import React from 'react';
import { connect } from 'react-redux';
import {increment, decrement, reset} from '../../redux/actions';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <div>当前计数为： {this.props.count}</div>
        <button onClick={()=>this.props.increment()}>+1</button>
        <button onClick={()=>this.props.decrement()}>-1</button>
        <button onClick={()=>this.props.reset()}>重置</button>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    count: state.Counter.count
  }
};
const mapDispatchToProps = {
  increment,
  decrement,
  reset
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
