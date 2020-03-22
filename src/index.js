import React from 'react'
import ReactDOM from 'react-dom'

import TodoList from './components/todo-list'
import AppHeader from './components/app-header'
import SearchPanel from './components/searchpanel'

const App = () =>{

    const todoData = [
        { label: 'Drink Coffe', important:false , id:1},
        { label:'Make Awesome App', important:false, id:2},
        { label:'Have a lunch', important:false, id:3}
    ];

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos = {todoData}/>
        </div>
    )
}

const el = (    
    <App/>       
);

ReactDOM.render(el, document.getElementById('root'));
