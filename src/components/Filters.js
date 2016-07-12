import React, {Component} from 'react'

export default class Filters extends Component {
    setFilter(filter){
        this.props.setFilter(filter);
    }
    render(){
        const {activeFilter} = this.props
        return (
            <ul className='filters'>
                <li>{this.props.remainingItems}</li>
                <li className={activeFilter === 'all' ? 'active' : null} onClick={this.setFilter.bind(this, 'all')}>All</li>
                <li className={activeFilter === 'active' ? 'active' : null} onClick={this.setFilter.bind(this,'active')}>Active</li>
                <li className={activeFilter === 'completed' ? 'active' : null} onClick={this.setFilter.bind(this, 'completed')}>Completed</li>
                {this.props.hasCompleted && <li onClick={this.props.clearCompleted}>Clear completed</li>}
            </ul>
        )
    }
}