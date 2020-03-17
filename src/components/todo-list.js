import React from 'react'
import TodoListItem from './todo-list-item'

const TodoList = (props) =>{
    return  (
        <ul>
            <li><TodoListItem label="drink cofe"/></li>
            <li><TodoListItem label="drink beer" 
            important
            /></li>
        </ul>
    )
}
export default TodoList;