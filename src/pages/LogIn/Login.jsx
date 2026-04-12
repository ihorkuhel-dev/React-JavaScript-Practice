import LoginForm from "../../features/auth/ui/LoginForm/LoginForm";
import {Link} from "react-router-dom";

export default function LogIn() {
    return (
            <div className="auth-page">
                <div className="welcome-message">
                    <h2>Welcome Back</h2>
                    <p>Please sigh in your corporate account</p>
                </div>
                <LoginForm/>
                <p>Нет аккаунта?
                    <Link to="/register">
                        Зарегистрируйтесь
                    </Link>
                </p>
            </div>
    )
}