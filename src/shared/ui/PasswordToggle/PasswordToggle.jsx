import './PasswordToggle.scss';

export default function PasswordToggle({ showPassword, onToggle }) {
    return (
        <button
            type="button"
            className="password-toggle"
            aria-label="Toggle password visibility"
            onClick={onToggle}
        >
            <span className={`toggle-icon ${showPassword ? 'show-password' : ''}`} />
        </button>
    );
}