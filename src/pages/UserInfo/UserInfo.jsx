import React from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from "../../redux/actions";

class UserInfo extends React.Component{
  render() {
    const { isLoading , errorMsg, userInfo} = this.props.UserInfo;
    return (
      <div>
        {
          isLoading ? '请求信息中' :
            (
              errorMsg ? errorMsg :
                <div>
                  <p>用户信息：</p>
                  <p>用户名： {userInfo.name}</p>
                  <p>介绍： {userInfo.intro}</p>
                </div>
            )
        }
        <button onClick={() => this.props.getUserInfo() && console.log(isLoading)}>请求用户信息</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    UserInfo: state.UserInfo
  }
};

const mapDispatchToProps = {
  getUserInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
