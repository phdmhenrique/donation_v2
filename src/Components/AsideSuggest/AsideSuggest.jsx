import React from 'react'
import { Container, SuggestContainer, UserPhoto, NameUser, SuggestTitle } from '../AsideSuggest/AsideSuggest.js';
import AsideImage from '../../Assets/aside-image.png';

function AsideSuggest() {
    return (
        <Container>
            <SuggestTitle>
                <span>Sugestões</span>
                <button>Ver tudo</button>
            </SuggestTitle>

            <Suggest>
                <SuggestContainer>
                    <img src={AsideImage} alt="" />
                    <UserPhoto />
                    <NameUser></NameUser>
                </SuggestContainer>
            </Suggest>

        </Container>
    )
}

export default AsideSuggest