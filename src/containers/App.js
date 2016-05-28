import React, {Component} from 'react'
import InputField from '../components/InputField'
import Todos from '../components/Todos'

export default class App extends Component {
    render() {
        return (
            <div>
                <InputField />
                <Todos />
            </div>
        );
    }
}
