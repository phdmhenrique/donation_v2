import React from 'react';
import { ButtonStyled } from './Button.js';

function Button({ children, addStatusClass }) { // onClick

    const addStatus = `button ${addStatusClass}`;

    return (
        <ButtonStyled className={addStatus}>{children}</ButtonStyled> // onClick={onClick}
    );
};

export default Button