import { useState} from "react";
import Input from "../../../../shared/api/ui/Input/Input";
import Button from "../../../../shared/api/ui/Button/Button";
import { rules, validateField} from "../../../../shared/utils/validators";
import {useLoginMutation} from "../../api/authApi";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {setCredentials} from "../../model/authSlice";


export default function LoginForm () {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [userNameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [serverError, setServerError] = useState('');

    const [loginTrigger, {isLoading}] = useLoginMutation({})

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validateFields = () => {
        const uNameError = validateField(userName, [rules.required, rules.username]);
        const passError = validateField(password, [rules.required, rules.minLength(8)]);

        setUserNameError(uNameError || '');
        setPasswordError(passError || '');

        return !uNameError && !passError;
    }


    const handleLoginChange = (e) => {
        setUserName(e.target.value);
        if (userNameError) setUserNameError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (passwordError) setPasswordError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setServerError('');

        if(validateFields()){
            try {
                const userData = await loginTrigger({
                    username: userName,
                    password: password
                }).unwrap();
                dispatch(setCredentials(userData));
                navigate('/');
            } catch (err){
                const errorMessage = err?.data?.message || 'Incorrect username or password';
                setServerError(errorMessage)
            }
        }
    }

    const setData = () => {
        setPassword('emilyspass')
        setUserName('emilys')
    }

    return (
        <form onSubmit={handleSubmit}>
            {serverError && (
                <div style={{ color: 'red', marginBottom: '16px', textAlign: 'center' }}>
                    {serverError}
                </div>
            )}
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
                    autoComplete="current-password"
                    label="Password"
                    error={passwordError}
                />
            </div>
            <div className="form-group button-group">
                <Button className="login-button" type="submit"  disabled={isLoading}>Login</Button>
                <Button className="setData-button" type="submin" onClick={setData}>Set data</Button>
            </div>
        </form>
    )
}