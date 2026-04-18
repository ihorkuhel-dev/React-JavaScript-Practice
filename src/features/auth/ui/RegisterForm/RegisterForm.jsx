import Button from "../../../../shared/ui/Button/Button";
import Input from "../../../../shared/ui/Input/Input";
import { useRegisterForm } from "../../lib/useRegisterForm";

export default function RegisterForm () {

    const {
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
    } = useRegisterForm();

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