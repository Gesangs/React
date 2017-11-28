
import React, { Component } from 'react';


class Input extends Component {
    constructor() {
        super()
        this.state = {
            num: ''
        }
    }
    handleValueChange(event) {
        const value = event.target.value 
        this.setState({
            num: value
        })
        this.props.trans(value);
    }
    render() {
        return(
            <div>
                <input type="number" value={this.state.num}
                   onChange={this.handleValueChange.bind(this)} />
            </div>
        )
    }
}

class PercentageShower extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <p>{this.props.transValue}</p>
        )
    }
}

class PercentageApp extends Component {
    constructor() {
        super()
        this.state = {
            transValue: ''
        }
    }
    
    handleTrans(value) {
        value = (value * 100).toFixed(2);
        if(value < 100) {
            this.setState({
                transValue: `${value}%`
            })
        } else {
            this.setState({
                transValue: ''
            })
        }
    }
    render() {
        return(
            <div>
                <Input trans={this.handleTrans.bind(this)} />
                <PercentageShower transValue={this.state.transValue} />
            </div>
        )
    }
}

export default PercentageApp