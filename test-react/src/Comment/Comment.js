import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Comment extends Component {
    static PropTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }
    constructor() {
        super()
        this.state = {
            timeString: ''
        }
    }

    componentWillMount() {
        this._updateTimeString()
        this.timer = setInterval(() => {
            this._updateTimeString.bind(this);
        },5000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    handleDelete() {
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }


    _updateTimeString() {
        const comment = this.props.comment;
        const duratime = (+Date.now() - comment.createTime) / 1000
        this.setState({
            timeString: duratime > 60 
            ? `${Math.round(duratime / 60)}分钟前` 
            : `${Math.round(Math.max(1, duratime))}秒前`
        })
    }
    render() {
        const { comment } = this.props;
        return (
            <div>
                {comment.username}: {comment.content}
                <span className='comment-delete'
                      onClick={this.handleDelete.bind(this)}>
                删除 {this.state.timeString}</span>
            </div>
        )
    }
}

export default Comment;