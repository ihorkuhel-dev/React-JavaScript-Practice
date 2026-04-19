import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {rules, validateField} from "../../../shared/utils/validators";
import {useRegisterMutation} from "../api/authApi";
import {addToast} from "../../toasts/toastsSlice";

export const useRegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [register, { isLoading }] = useRegisterMutation();

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validateFields()) {
            try {
                const response = await register({
                    username: userName,
                    password: password
                }).unwrap();

                dispatch(addToast({
                    type: 'success',
                    message: `Registration successful for ${response.username}! Please login.`
                }));
                navigate('/login');
            } catch (err) {
                dispatch(addToast({
                    type: 'error',
                    message: "Registration failed. Please try again."
                }));
            }
        }
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
        handleSubmit,
        isLoading
    }
};
