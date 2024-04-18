import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ status, children }) { // onClick

    let buttonStyle = {};

    // Define o estilo baseado no status
    switch (status) {
        case 'ativo':
            buttonStyle = { backgroundColor: '#F97272' };
            break;
        case 'inativo':
            buttonStyle = { backgroundColor: 'transparent', border: '.1rem solid #F97272', color: '#F97272' };
            break;
        case 'desativado':
            buttonStyle = { backgroundColor: 'gray', cursor: 'not-allowed', opacity: 0.5 };
            break;

        default:
            buttonStyle = {};
    }

    return (
        <button style={buttonStyle} className="button">{children}</button> // onClick={onClick}
    );
};

Button.propTypes = {
    // onClick: PropTypes.func.isRequired,
    status: PropTypes.oneOf(['ativo', 'inativo', 'desativado']).isRequired,
    children: PropTypes.node.isRequired,
}

export default Button