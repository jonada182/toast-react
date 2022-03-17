import React from 'react'
import CloseIcon from './CloseIcon'

const Toast = ({ toast, onRemoveToast }) => {
  return (
    <div className="toast">
        <p className="toast-message">{ toast.message }</p>
        <button className="toast-close-btn" onClick={() => {onRemoveToast(toast.id)}}>
            <CloseIcon />
        </button>  
    </div>
  )
}

Toast.defaultProps = {
    message: 'test'
}

export default Toast
