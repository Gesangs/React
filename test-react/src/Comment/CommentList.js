import React, { Component } from 'react';
import Comment from './Comment'

class CommentList extends Component {

    render() {
        const { comments } = this.props;
        return (
            <div>{comments.map((item, i) => <Comment comment={item} key={i}/>)}</div>
        )
    }
}

export default CommentList