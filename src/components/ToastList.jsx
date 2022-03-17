import React from 'react'
import Toast from './Toast'

const ToastList = ({ toasts, onRemoveToast }) => {
    
    const toastItems = toasts.map((toast) =>
        <Toast key={toast.id} toast={toast} onRemoveToast={ onRemoveToast } />
    );

  return (
    <div className="toast-list">
        { toastItems }
    </div>
  )
}

export default ToastList
