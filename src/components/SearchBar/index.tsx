import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'

import * as S from './styles'


function App(){
    const history = useHistory();

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value, e.key);
        if(e.key === 'Enter' && e.currentTarget.value) {
            history.push(`/search?s=${e.currentTarget.value}`)
        }
    };

    return (
        <S.Wrapper>
            <AiOutlineSearch />
            <S.Input onKeyPress={onKeyPress}/>
        </S.Wrapper>
    )
}

export default App;