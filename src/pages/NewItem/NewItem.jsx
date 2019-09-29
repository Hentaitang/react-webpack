import React from 'react';
import history from 'router/history';
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions';
import { hot } from 'react-hot-loader/root';

class NewItem extends React.Component{
  constructor(props){
    super(props);
    const id = this.props.itemList.slice(-1)[0].id + 1;
    this.state = {
      name: '',
      desc: '',
      id
    }
  }
  saveMsg(){
    this.props.addItem(this.state);
    history.push('/')
  }
  changeState(e, type){
    if(type === 'name'){
      this.setState({
        ...this.state,
        name: e.target.value
      })
    }else{
      this.setState({
        ...this.state,
        desc: e.target.value
      })
    }
  }
  render() {
    const {name, desc} = this.state;
    return (
      <div>
        <h1>添加</h1>
        <label>名字：<input type="text" value={name} onChange={(e)=>this.changeState(e, 'name')}/></label>
        <br/>
        <label>介绍：<input type="text" value={desc} onChange={(e)=>this.changeState(e, 'desc')}/></label>
        <br/>
        <button onClick={()=>this.saveMsg()}>保存</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    itemList: state.Items
  }
};

const mapDispatchToProps = {
  addItem
};

export default connect(mapStateToProps, mapDispatchToProps)(hot(NewItem));
