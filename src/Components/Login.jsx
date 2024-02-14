import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='con'>
      <form>
        <label for="name">Name : </label>
        <input type='text' id='name'></input>
      </form>
    </div>
  )
}

export default Login
