import React, { Component } from 'react';
import Comment from './Comment'
import PropTypes from 'prop-types'


class CommentList extends Component {
    static PropTypes ={
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }

    handleDeleteComment (index) {
        if (this.props.onDeleteComment) {
          this.props.onDeleteComment(index)
        }
      }
    render() {
        const { comments } = this.props;
        return (
            <div>{comments.map((item, i) => 
                <Comment comment={item}
                         key={i}
                         index={i}
                         onDeleteComment={this.handleDeleteComment.bind(this)}/>)}
            </div>
        )
    }
}

export default CommentList