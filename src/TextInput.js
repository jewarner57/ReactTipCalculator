import react, { Component } from "react"
import './TextInput.css'

class TextInput extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }

    render() {
        return (
            <form className="TextInput">
                <h3>{this.props.name}:</h3>
                <input
                    type="number"
                    value={this.state.value}
                    onChange={(e) => {
                        this.setState({ value: e.target.value },
                            () => this.props.onChange(this.state.value))
                    }}
                />
            </form>
        )
    }
}


export default TextInput