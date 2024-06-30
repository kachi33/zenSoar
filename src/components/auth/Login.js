import Logo from "../UI/Logo";
import LoginForm from "./LoginForm";

const Login = function(){
    return( 
        <div className="login">
        <div className="login-blk">
            <Logo />
            <h2>Log into your account</h2>
            <LoginForm/>
        </div>
        <div className="login-exihbit">
        </div>

     </div>

        // login form 
        // design 
        )
}

export default Login;