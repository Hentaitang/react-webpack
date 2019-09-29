import React from 'react';
import history from 'router/history';
import { connect } from 'react-redux';
import './Items.scss';
import { hot } from 'react-hot-loader/root';

class Items extends React.Component {
  constructor(props){
    super(props);
  }
  editItem(name){
    history.push(`/item/${name}`)
  }
  render() {
    const {itemList} = this.props;
    return (
      <div>
        <button onClick={()=> history.push('/item')}>添加新信息</button>
        <ul className='itemList'>
          {itemList.map(list => (
            <li key={list.id} onClick={()=>this.editItem(list.id)}>姓名：{list.name} ； 介绍：{list.desc}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    itemList: state.Items
  }
};

export default connect(mapStateToProps)(hot(Items));
