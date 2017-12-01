// 第三阶段-42

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const usersReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_USER': 
      return [...state, action.user];
    case 'DELETE_USER':
      let deState = [...state];
      deState.splice(action.index, 1);
      return [...deState];
    case 'UPDATE_USER':
      let upState = [...state];
      upState[action.index] = {...upState[action.index], ...action.user};
      return [...upState];
    default:
      return state;
      
  }
}


class User extends Component {
    render () {
      const { user, onDelecteUser, index } = this.props
      return (
        <div>
          <div>Name: {user.username}</div>
          <div>Age: {user.age}</div>
          <div>Gender: {user.gender}</div>
          <button onClick={() => onDelecteUser(user, indx)}>删除</button>
        </div>
      )
    }
  }
  
  class UsersList extends Component {
    constructor() {
      super() 
      this.state = {
        index: 0,
        userName: '',
        age: '',
        gender: '' 
      }
    }
    render () {
      const { userName, age, gender } = this.state;
      const { onAddUser, onDeleteUser, users } = this.props;
      return (
        <div>
          {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
          <div className='add-user'>
            <div>Username: <input type='text' /></div>
            <div>Age: <input type='number' /></div>
            <div>Gender:
              <label>Male: <input type='radio' name='gender' value='male' onChange={e=>{this.setState({gender: e.target.value})}} /></label>
              <label>Female: <input type='radio' name='gender' value='female' onChange={e=>{this.setState({gender: e.target.value})}} /></label>
            </div>
            <button onClick={this.setState({index: this.state.index + 1}); onAddUser(this.state)}>增加</button>
          </div>
          {/* 显示用户列表 */}
          <div className='users-list'>
            {users.map((user, index) => {
              <User user={user} index={index} onDelecteUser={onDelecteUser.bind(this)} key={index} />
            })}
          </div>
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state
    }
  }

  const mapDispatchToProps = (dispatch) {
    return {
      addUser: (user) => {
        dispatch({type: 'ADD_USER', user})
      },
      onDeleteUser: (index) => {
        dispatch({type: 'DELETE_USER', index: index});
      }
    }
  }

  UsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList);