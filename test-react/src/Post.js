import React, { Component } from 'react';

class Post extends Component {
    constructor () {
      super()
      this.state = { content: '' }
    }
    
    componentWillMount () {
      this._loadData()
    }
    getPostData() {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                resolve('ss')
            }, 1000);
        })
    }
    async _loadData () {
      this.setState({ content: '数据加载中...' })
      const content = await this.getPostData()
      this.setState({ content })
    }
    
    render () {
      return (
        <div>
          <div className='post-content'>{this.state.content}</div>
          <button onClick={() => {
            this._loadData()
          }}>刷新</button>
        </div>
      )
    }
  }

  export default Post