import React from 'react';
import './Button.css';

function Button({ children, addStatusClass }) { // onClick

    const addStatus = `button ${addStatusClass}`;

    return (
        <button className={addStatus}>{children}</button> // onClick={onClick}
    );
};

export default Button