import React from 'react';
import ImageComponent from './ImageComponent';

function App() {
    return (
        <div>
            <h1>Imagens</h1>
            <ImageComponent imagePath="/caminho/para/imagem1.jpg" />
            <ImageComponent imagePath="/caminho/para/imagem2.jpg" />
            <ImageComponent imagePath="/caminho/para/imagem3.jpg" />
        </div>
    );
}

export default App;
