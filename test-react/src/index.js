import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LessonsList from './lessons13.js';
import CommentApp from './Comment/CommentApp';
import PercentageApp from './PercentageApp.js';
import Post from './Post.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
    {/* <App /> */}
    {/* <LessonsList /> */}
    {/* <CommentApp /> */}
    <PercentageApp/ >
    <Post />
    </div>, document.getElementById('root'));
registerServiceWorker();
