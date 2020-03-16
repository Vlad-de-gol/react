import React from 'react'
import ReactDOM from 'react-dom'

import TodoList from './components/todo-list'
import AppHeader from './components/app-header'
import SearchPanel from './components/searchpanel'

const App = () =>{
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    )
}

const el = (    
    <App/>       
);

ReactDOM.render(el, document.getElementById('root'));
