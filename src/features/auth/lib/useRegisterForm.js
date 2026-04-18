import {useState} from "react";
import {rules, validateField} from "../../../shared/utils/validators";

export const useRegisterForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const validateFields = () => {
        const uNameError = validateField(userName, [rules.required, rules.username]);
        const passError = validateField(password, [rules.required, rules.minLength(8)]);
        const confPassError = validateField(confirmPassword, [rules.required, rules.match(password), rules.minLength(8)]);

        setUserNameError(uNameError || '');
        setPasswordError(passError || '');
        setConfirmPasswordError(confPassError || '');

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

    return {
        userName,
        password,
        confirmPassword,
        userNameError,
        passwordError,
        confirmPasswordError,
        handleLoginChange,
        handlePasswordChange,
        handleConfirmPasswordChange,
        handleSubmit
    }
};
