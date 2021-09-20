import React, { useEffect } from 'react';

export const useOnClickOutside = <T extends Element>(
  ref: React.RefObject<T>,
  callback: (e: Event) => void
) => {
  useEffect(() => {
    const listener = (e: Event) => {
      if (!ref.current || ref.current.contains(e.target as Node)) {
        return;
      }

      callback(e);
    };

    document.addEventListener('click', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback]);
};
