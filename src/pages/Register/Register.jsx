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
            <p>Already have an account?
                <Link to="/login">
                    Sign in
                </Link>
            </p>
        </div>
    )
}