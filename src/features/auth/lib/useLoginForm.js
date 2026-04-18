import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {rules, validateField} from "../../../shared/utils/validators";
import {useLoginMutation} from "../api/authApi";
import {setCredentials} from "../model/authSlice";

export const useLoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [serverError, setServerError] = useState('');
    const [loginTrigger, {isLoading}] = useLoginMutation({});

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

    return {
        userName,
        password,
        userNameError,
        passwordError,
        serverError,
        isLoading,
        handleLoginChange,
        handlePasswordChange,
        handleSubmit,
        setData
    };
};
