import React from 'react'
import { useForm } from '../../../05-hook-app/src/hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({ 
    description: ''
   })

   const onFormSubmit = ( e ) => {
    e.preventDefault();
    if ( description.length <= 1 ) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    }

    onNewTodo( newTodo );
    onResetForm();
   }

  return (
    <form onSubmit={ onFormSubmit } >
      <input 
          type="text"
          placeholder='What we have to do?'
          className='form-control'
          name='description'
          value={ description }
          onChange={ onInputChange } 
      />

      <button 
         type='submit'
         className='btn btn-outline-primary mt-2' 
      > Add </button>
    </form>
  )
}
