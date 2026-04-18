import {Link} from "react-router-dom";
import LoginForm from "../../features/auth/ui/LoginForm/LoginForm";

export default function LogIn() {
    return (
            <div className="auth-page">
                <div className="welcome-message">
                    <h2>Welcome Back</h2>
                    <p>Please sigh in your corporate account</p>
                </div>
                <LoginForm/>
                <p className="auth-message">Don't have an account?
                    <Link to="/register">
                        Sign up
                    </Link>
                </p>
            </div>
    )
}