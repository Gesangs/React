import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LessonsList from './lessons13.js';
import CommentApp from './Comment/CommentApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
    <App />
    <LessonsList />
    <CommentApp />
    </div>, document.getElementById('root'));
registerServiceWorker();
