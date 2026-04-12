export const rules = {

    required: (value) => {
        if(!value || value.trim() === '') return 'Required field';
        return null;
    },

    email: (value) => {
        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(value)) return 'Invalid email address';
        return null;
    },

    username: (value) => {
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        if (!usernameRegex.test(value)) return 'Invalid username';
        return null;
    },

    minLength: (min) => (value) => {
        if (value && value.length < min) return `Minimum length - ${min}`;
        return null;
    },

    match: (matchValue, errorMessage) => (value) => {
        if (value !== matchValue) return errorMessage || 'Invalid match';
        return null;
    }
}

export const validateField = (value, filedRules) => {
    for (const rule of filedRules) {
        const error = rule(value)
        if (error) return error;
    }
    return null;
}