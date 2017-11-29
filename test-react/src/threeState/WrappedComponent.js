import WrappWithLoadData from './NewCompoent.js'


class InputWithUserName extends Component {
    constructor() {
        super()
    }

    render() {
        return <input value={this.props.data} />
    }
}

InputWithUserName = WrappWithLoadData(InputWithUserName, 'username');

export default InputWithUserName
