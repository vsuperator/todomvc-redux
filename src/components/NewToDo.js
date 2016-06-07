import React, {Component} from 'react'

export default class InputField extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            text: this.props.inputValue.value || ''
        }
    }
    handleSubmit(e){
        const text = e.target.value.trim()
        if(e.keyCode !== 13 || e.target.value.replace(/\s/g, '') === ''){
            return
        }
        this.setState({text: ''})
        this.props.addTodo(text)
    }
    handleChange(e) {
        this.setState({ text: e.target.value })
    }
    render(){
        return (
            <input type="text"
                   value={this.state.text}
                   onChange={::this.handleChange}
                   onKeyDown={::this.handleSubmit}
            />
        )
    }
}