import React, {Component} from 'react'

export default class InputField extends Component {
    onKeyPress(e){
        if(e.keyCode !== 13){
            return
        }
        console.log(this.props)
        this.props.addTodo(e.target.value)
    }
    render(){
        return (
            <input type="text"
                   onChange={::this.props.changeInputValue}
                   onKeyDown={::this.onKeyPress}
            />
        )
    }
}