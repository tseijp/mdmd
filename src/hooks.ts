//https://usehooks.com/useWindowSize/
import { useState, useEffect, useCallback } from 'react';
export default function useWindowSize() {
    const isClient = typeof window === 'object';
    const getSize = useCallback(() => {
        return {
          width: isClient ? window.innerWidth : undefined,
          height: isClient ? window.innerHeight : undefined
        };
    }, [isClient])
    const [windowSize, setWindowSize] = useState(getSize());
    useEffect(() => {
        if (!isClient)
            return
        function handler () {
            setWindowSize(getSize())
        }
        window.addEventListener('resize', handler);
        return ()=>window.removeEventListener('resize', handler);
    }, [isClient, getSize]); // Empty array ensures that effect is only run on mount and unmount
    return windowSize;
}
