import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Header extends Component {

    static propTypes = {
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
            <h1 style={{ color: this.props.themeColor }}>Gesangs</h1>
        )
    }
 }

 const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
 }
 Header = connect(mapStateToProps)(Header)
 export default Header