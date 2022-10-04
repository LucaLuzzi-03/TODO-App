import React from 'react'
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'
import { useTodo } from '../../05-hook-app/src/hooks'


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();

  return (
    <>
        <h1>TodoApp: { todosCount }, <small>pending: { pendingTodosCount }</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo } />
            </div>

            <div className="col-5">
                <h4>Add TODO</h4>
                <hr/>
                <TodoAdd onNewTodo={ handleNewTodo } />
            </div>
        </div>


    </>
  )
}
