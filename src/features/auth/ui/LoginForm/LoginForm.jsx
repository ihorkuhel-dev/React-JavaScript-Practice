import Button from "../../../../shared/ui/Button/Button";
import Input from "../../../../shared/ui/Input/Input";
import { useLoginForm } from "../../lib/useLoginForm";

export default function LoginForm () {

    const {
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
    } = useLoginForm();

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
                <Button className="setData-button" type="button" onClick={setData}>Set data</Button>
            </div>
        </form>
    )
}