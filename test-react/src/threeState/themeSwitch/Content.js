import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch.js'

class Content extends Component {

    static contextTypes = {
        store: PropTypes.object
    }

    constructor() {
        super()
        this.state = {
            themeColor: ''
        } 
    }

    componentWillMount() {
        this._updateThemeColor()
        const { store } = this.context
        store.subscribe(() => this._updateThemeColor())
    }

    _updateThemeColor() {
        const { store } = this.context
        const state = store.getState()
        this.setState({ themeColor: state.themeColor })
    }

    render() {
        return (
            <div>
                <p style={{ color: this.state.themeColor }}>Gesangs</p>
                <ThemeSwitch />
            </div>
        )
    }
}

export default Content