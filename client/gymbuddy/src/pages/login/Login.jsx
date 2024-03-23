import React from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom'




const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')

    const navigate = useNavigate();

    const handleSubmit = async(e) => {

    }



  return (
    <div className = "login-page">
        <div className = "login-container">
            <h1>Login</h1>
            <form className = "login-form" onSubmit = {handleSubmit}>
            <label className = "login-label" htmlFor = "login-email">Email</label>
            <input
            className = "login-input"
            name = "email"
            type = "email"
            id = "login-email"
            placeholder = "Email"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            />
            <label className = "login-label" htmlFor = "login-password">Password</label>
            <input
            className = "login-input"
            name = "password"
            type = "password"
            id = "password"
            placeholder = "Password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            />
            <button className = "login-button">Login</button>
            <p className = "login-redirect">Don't have an account? <Link to = "/signup">Register</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login