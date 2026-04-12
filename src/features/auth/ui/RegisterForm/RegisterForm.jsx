import {useState} from "react";
import Input from "../../../../shared/api/ui/Input/Input";
import Button from "../../../../shared/api/ui/Button/Button";

export default function RegisterForm (props) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [userNameError, setUserNameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState('');


    const handleLoginChange = (e) => {
        setUserName(e.target.value);
        if (userNameError) setUserNameError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (passwordError) setPasswordError('');
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (passwordError) setConfirmPasswordError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Данные готовы к отправке:', { username: userName, password });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    value={userName}
                    onChange={handleLoginChange}
                    label="User name"
                    error={userNameError}
                />
            </div>
            <div className="form-group">
                <Input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    autoComplete="new-password"
                    label="Password"
                    error={passwordError}
                />
            </div>
            <div className="form-group">
                <Input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    autoComplete="new-password"
                    label="Confirm Password"
                    error={confirmPasswordError}
                />
            </div>
            <div className="form-group">
                <Button type="submit">Login</Button>
            </div>
        </form>
    )

}