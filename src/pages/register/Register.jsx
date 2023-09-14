import { useState } from "react"
import "./register.scss"
import { useRef } from "react"

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const emailRef = useRef()
    const passwordRef = useRef()
    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    const handlePassword = () => {
        setPassword(passwordRef.current.value)
    }
  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="nada" />
                <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Películas y series ilimitadas y mucho más</h1>
            <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
            <p>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
            {
                !email ? (
                    <div className="input">
                        <input type="email" placeholder="Email"  ref={emailRef} />
                        <button className="registerButton" onClick={handleStart}>Comenzar</button>
                    </div>                    
                ) : (

                    <form className="input">
                        <input type="password" placeholder="Password" ref={passwordRef} />
                        <button className="registerButton" onClick={handlePassword}>Start</button>
                    </form>
                )
            }
        </div>

        
        
    </div>
  )
}
