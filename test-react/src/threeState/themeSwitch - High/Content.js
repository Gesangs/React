import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch.js'
import { connect } from './connect.js'

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

    render() {
        return (
            <div>
                <p style={{ color: this.props.themeColor }}>Gesangs</p>
                <ThemeSwitch />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
 }
 Content = connect(mapStateToProps)(Content)

export default Content