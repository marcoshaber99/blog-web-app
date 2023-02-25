import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" name="" placeholder='Username' />
        <input required type="password" name="" placeholder='Password' />
        <button>Login</button>
        <p>ERROR MSG</p>
        <span>Don't have an account? <br/><Link to={"/register"}>Sign Up</Link> </span>
      </form>
    </div>
  )
}

export default Login