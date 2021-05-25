import { useEffect } from 'react';

/**
 * this is used for update the document title
 *
 * @param title the new title
 * @example
 * useTitle('newTitle')
 */
const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, []);
};

export default useTitle;
