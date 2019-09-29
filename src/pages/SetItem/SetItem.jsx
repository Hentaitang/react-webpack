import React from 'react';
import history from 'router/history';
import {connect} from 'react-redux';
import { updateItem, deleteItem } from '../../redux/actions';
import { hot } from 'react-hot-loader/root';

class SetItem extends React.Component {
  constructor(props) {
    super(props);
    const id = history.location.pathname.split('/').pop();
    let name, desc;
    this.props.itemList.map(n => {
      if (n.id === id) {
        name = n.name;
        desc = n.desc
      }
    });
    this.state = {name, desc, id}
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

  saveMsg() {
    this.props.updateItem(this.state);
    history.push('/')
  }

  deleteItem(){
    this.props.deleteItem(this.state);
    history.push('/')
  }

  render() {
    const {name, desc, id} = this.state;
    return (
      <div>
        <h1>编辑</h1>
        <label>名字：<input type="text" value={name} onChange={(e) => this.changeState(e, 'name')}/></label>
        <br/>
        <label>介绍：<input type="text" value={desc} onChange={(e) => this.changeState(e, 'desc')}/></label>
        <br/>
        <button onClick={() => this.saveMsg()}>保存</button>
        <button onClick={() => this.deleteItem()}>删除</button>
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
  updateItem,
  deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(hot(SetItem));
