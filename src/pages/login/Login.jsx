import "./login.scss"

export default function Login() {
   
  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="nada" />
            </div>
        </div>
        <div className="container">
            <form action="">
                <h1>Sing In</h1>  
                <input type="email" placeholder="Email o numero telefonico"></input>  
                <input type="password" placeholder="Password"></input>
                <button >Sing In</button>
                <span>Nuevo en Netflix? <b>Registrese pai.</b></span>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a
                    bot. <b>Learn more</b>.
                </small>
            </form>            
        </div>        
    </div>
  )
}
