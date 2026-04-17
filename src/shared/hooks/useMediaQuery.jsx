import {useEffect, useState} from "react";

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(null);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query)

        setMatches(mediaQueryList);

        const documentChangeHandler = (e) => {
            setMatches(e.matches);
        }
        mediaQueryList.addEventListener('change', documentChangeHandler)

        return () => {
            mediaQueryList.removeEventListener('change', documentChangeHandler)
        }
    }, [query])

    return matches;
}