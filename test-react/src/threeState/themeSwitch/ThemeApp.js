import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Header from './Header.js'
import Content from './Content.js'


function createStore(reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({})
    return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
    if(!state) return {
        themeColor: 'blue'
    }
    switch(action.type) {
        case 'CHANGE_COLOR':
            return {...state, themeColor: action.themeColor}
        default:
            return state
    }
} 

const store = createStore(themeReducer)

class ThemeApp extends Component {

    static childContextTypes = {
        store: PropTypes.object
    }

    constructor() {
        super()
    }

    getChildContext() {
        return { store }
    }

    render() {
        return(
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

export default ThemeApp