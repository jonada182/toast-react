import React from 'react'

const ToastForm = ({ handleSubmit, handleChange, toastMessage }) => {

  return (
    <form className="toast-form" onSubmit={ handleSubmit }>
        <input type="text" placeholder="Enter a message" value={ toastMessage } onChange={ handleChange }/>
        <button type="submit">Show Toast</button>
    </form>
  )
}

export default ToastForm