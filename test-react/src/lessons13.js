import React, { Component } from 'react';

const lessons = [
  { title: 'Lesson 1: title', description: 'Lesson 1: description' },
  { title: 'Lesson 2: title', description: 'Lesson 2: description' },
  { title: 'Lesson 3: title', description: 'Lesson 3: description' },
  { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]


class Lessons extends Component {
    render() {
        const { lesson } = this.props;
        return(
            <div>
            <h1>{lesson.title}</h1>
            <p>{lesson.description}</p>
            </div>
        )
    }
}
class LessonsList extends Component {
    render() {
        return(
            <div>
                {lessons.map((lesson, i) => <Lessons lesson={lesson} key={i} /> )}
            </div>
        )
    }
}

export default LessonsList;