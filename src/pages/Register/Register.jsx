import {Link} from "react-router-dom";
import RegisterForm from "../../features/auth/ui/RegisterForm/RegisterForm";

export default function Register() {
    return (

        <div className="auth-page">
            <div className="welcome-message">
                <h2>Registration Form</h2>
                <p>Fill out form for registration</p>
            </div>
            <RegisterForm/>
            <p>Уже есть аккаунт?
                <Link to="/login">
                    Войти
                </Link>
            </p>
        </div>
    )
}