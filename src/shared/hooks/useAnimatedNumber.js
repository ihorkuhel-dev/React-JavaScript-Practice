import {useEffect, useState} from "react";

export function useAnimatedNumber(value, duration = 800) {
    const [animatedValue, setAnimatedValue] = useState(0);

    useEffect(() => {
        let start = 0;
        let animationFrameId;

        const increment = value / (duration / 16);

        const animate = () => {
            start += increment;

            if (start < value) {
                setAnimatedValue(Math.floor(start));
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setAnimatedValue(value);
            }
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [value, duration]);

    return animatedValue;
}