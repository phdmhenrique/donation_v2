import React from 'react';
import Button from '../Button/Button.jsx';

function Teste() {

    // const handleClick = () => {
    //     console.log('foda')
    // }

    return (

        <div>
            {/* onClick={handleClick} */}
            <Button status="ativo">
                Botão Ativo
            </Button>

            {/* onClick={handleClick} */}
            <Button status="inativo">
                Botão Inativo
            </Button>

            {/* onClick={handleClick} */}
            <Button status="desativado">
                Botão Desativado
            </Button>
        </div>
    )
}

export default Teste