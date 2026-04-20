import {Link} from "react-router-dom";
import RegisterForm from "../../features/auth/ui/RegisterForm/RegisterForm";
import {useSEO} from "../../shared/hooks/useSEO";

export default function Register() {

    useSEO({ title: 'Sign up | CRM', description: 'Create a new CRM account' });

    return (

        <div className="auth-page">
            <div className="welcome-message">
                <h2>Registration Form</h2>
                <p>Fill out form for registration</p>
            </div>
            <RegisterForm/>
            <p  className="auth-message">Already have an account?
                <Link to="/login">
                    Sign in
                </Link>
            </p>
        </div>
    )
}