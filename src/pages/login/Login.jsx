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
                <span>Nuevo en Netflix? <b>Registrate.</b></span>
                <small>
                    Esta página está protegida por Google reCAPTCHA para asegurarnos que tú no eres un bot. <b>Learn more</b>.
                </small>
            </form>            
        </div>        
    </div>
  )
}
