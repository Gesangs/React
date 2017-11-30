import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {

    static contextTypes = {
        store: PropTypes.object
    }
    constructor() {
        super()
    }

    componentWillMount() {
        const { store } = this.context
        this._updateThemeColor()
        store.subscribe(() => this._updateThemeColor())
    }

    _updateThemeColor() {
        const { store } = this.context
        const state = store.getState()
        this.setState({ themeColor: state.themeColor })
    }
    handleThemeSwitch(color) {
        const { store } = this.context
        store.dispatch({
            type: 'CHANGE_COLOR',
            themeColor: color
        })
    }
    render() {
        return (
            <div>
                <bottom style={{ color: this.state.themeColor }}
                        onClick={this.handleThemeSwitch.bind(this,'red')}>Red</bottom>
                <bottom style={{ color: this.state.themeColor }}
                        onClick={this.handleThemeSwitch.bind(this,'blue')}>Blue</bottom>
            </div>
        )
    }
}

export default ThemeSwitch