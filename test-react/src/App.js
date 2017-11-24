import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Index extends Component {
    constructor() {
        super()
        this.state = {
            isRunning: false,
            isBarking: false
        }
    }

    bark() {
        this.setState({
            isBarking: true
        })
    }

    run() {
        this.setState({
            isBarking: true
        })
        const times = setTimeout(() => {
            this.setState({
                isRunning: false,
                isBarking: false,
            })
        }, 40)
    }

    render() {
        return (
            <div onClick={this.run.bind(this), this.bark.bind(this)}>DOG</div>
        )
    }
}


class LikeButton extends Component {
    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }

    constructor() {
        super()
        this.state = {
            isLiked: false
        }
    }

    handleClickOnLikeButton() {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render() {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked
                ? this.props.likedText
                : this.props.unlikedText} 👍
      </button>
        )
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            likedText: '已赞',
            unlikedText: '赞'
        }
    }

    handleClickOnChange() {
        this.setState({
            likedText: '取消',
            unlikedText: '点赞'
        })
    }

    render() {
        return (
            <div>
        <LikeButton
            likedText={this.state.likedText}
            unlikedText={this.state.unlikedText} />
        <div>
          <button onClick={this.handleClickOnChange.bind(this)}>
            修改 wordings
          </button>
        </div>
      </div>
        )
    }
}
export default App;