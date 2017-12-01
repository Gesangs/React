import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import LessonsList from './lessons13.js';
// import CommentApp from './Comment/CommentApp';
// import PercentageApp from './PercentageApp.js';
// import Post from './Post.js'
// import Timer from './timer.js'
// import ThemeApp from './threeState/themeSwitch - High/ThemeApp.js'


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './Comment-redux/containers/commentApp'
import commentsReducer from './Comment-redux/reducers/comment'

import registerServiceWorker from './registerServiceWorker';


const store = createStore(commentsReducer)
ReactDOM.render(
    <div>
    {/* <App /> */}
    {/* <LessonsList /> */}
    {/* <CommentApp /> */}
    {/* <PercentageApp/ > */}
    {/* <Post /> */}
    {/* <Timer /> */}
    {/* <ThemeApp /> */}
    <Provider store={store}>
        <CommentApp />
    </Provider>
    </div>, document.getElementById('root'));
registerServiceWorker();
