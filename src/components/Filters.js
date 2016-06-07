import React, {Component} from 'react'

export default class Filters extends Component {
    filterTodos(e){
        console.log(e.target.innerHTML);
        const filterTypes = ['all', 'active', 'completed']
        // Если одна из них то делаем сортировку
        // if(){
        //
        // }
        // Что мне нужно сделать тут?
        //
        // Хеш обьект
        // const typeOfFilters = {
        //     all:
        // }
    }
    render(){
        return (
            <ul className="filters" onClick={::this.filterTodos}>
                <li>All</li>
                <li>Active</li>
                <li>Completed</li>
            </ul>
        )
    }
}