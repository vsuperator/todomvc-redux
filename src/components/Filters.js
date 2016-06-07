import React, {Component} from 'react'

export default class Filters extends Component {
    setFilter(filter){
        this.props.setFilter(filter);
    }
    render(){
        return (
            <ul className='filters'>
                <li onClick={this.setFilter.bind(this, 'all')}>All</li>
                <li onClick={this.setFilter.bind(this,'active')}>Active</li>
                <li onClick={this.setFilter.bind(this, 'completed')}>Completed</li>
            </ul>
        )
    }
}