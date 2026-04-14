import { useEffect, useRef, useState, memo } from 'react';
import './Toast.scss';

const Toast = memo((props) => {
    const {
        message,
        type = "info",
        duration = 2000,
        onClose
    } = props;

    const [isClosing, setIsClosing] = useState(false);

    const isClosingRef = useRef(false);
    const progressBarRef = useRef(null);
    const onCloseRef = useRef(onClose);

    useEffect(() => {
        onCloseRef.current = onClose;
    }, [onClose]);

    const handleClose = () => {
        if (isClosingRef.current) return;

        isClosingRef.current = true;
        setIsClosing(true);

        setTimeout(() => {
            onCloseRef.current();
        }, 300);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleClose();
        }, duration);

        let animationTimeout;

        if (progressBarRef.current) {
            progressBarRef.current.style.transition = `width ${duration}ms linear`;

            animationTimeout = setTimeout(() => {
                if (progressBarRef.current) {
                    progressBarRef.current.classList.add('active');
                }
            }, 10);
        }

        return () => {
            clearTimeout(timeout);
            if (animationTimeout) {
                clearTimeout(animationTimeout);
            }
        };
    }, [duration]);

    return (
        <div className={`toast toast-${type} ${isClosing ? 'closing' : ''}`}>
            <p>{message}</p>
            {}
            <button className="toast-close-btn" onClick={handleClose}>
                &times;
            </button>
            <hr ref={progressBarRef} className="toast-progress" />
        </div>
    );
});

export default Toast;