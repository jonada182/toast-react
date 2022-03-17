import { useState } from 'react'
import ToastForm from './components/ToastForm'
import ToastList from './components/ToastList'

const App = () => {

  const [toasts, setToasts] = useState([])
  const [toastMessage, setToastMessage] = useState('')

  const handleSubmit = (event) => {
    setToasts([...toasts, {id: toasts.length + 1, message: toastMessage}]);
    setToastMessage('');
    event.preventDefault();
  }

  const handleChange = (event) => {
    setToastMessage(event.target.value);
  }

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id != id));
  }

  return (
    <div className="toast-container">
        <ToastForm handleSubmit={ handleSubmit } handleChange={ handleChange } toastMessage={ toastMessage } />
        <ToastList toasts={ toasts } onRemoveToast={ removeToast } />
    </div>
  )
}

export default App
