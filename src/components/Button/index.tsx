import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;


const App: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return(
        <S.Wrapper {...rest}>
            {children}
        </S.Wrapper>
    )   
}

export default App;