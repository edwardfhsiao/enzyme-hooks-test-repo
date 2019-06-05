import React, { useEffect, useCallback, useRef } from 'react';

export default ({ tabIndex, disabled }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (tabIndex) {
      // if tabIndex provided
      inputRef.current.setAttribute('tabindex', tabIndex);
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} disabled={disabled} />
    </div>
  );
};
