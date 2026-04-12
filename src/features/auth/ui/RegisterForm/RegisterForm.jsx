import {useState} from "react";
import Input from "../../../../shared/api/ui/Input/Input";
import Button from "../../../../shared/api/ui/Button/Button";
import {rules, validateField} from "../../../../shared/utils/validators";

export default function RegisterForm (props) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [userNameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const validateFields = () => {
        const uNameError = validateField(userName,
            [rules.required, rules.username]);
        const passError = validateField(password,
            [rules.required, rules.minLength(8)]);
        const confPassError = validateField(confirmPassword,
                [rules.required, rules.match(password), rules.minLength(8)]);

        setUserNameError(uNameError || '');
        setPasswordError(passError || '');
        setConfirmPasswordError(confPassError || '')

        return !uNameError && !passError && !confPassError;
    }


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
        if (confirmPasswordError) setConfirmPasswordError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateFields())
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
                <Button type="submit">Register</Button>
            </div>
        </form>
    )

}