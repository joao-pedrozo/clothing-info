import React from 'react';
import { FaRegHeart } from 'react-icons/fa'

import * as S from './styles'
import Button from '../Button';


export interface ComponentProps {
    productImageUrl: string;
    productTitle: string;
}

const App = ({ productImageUrl, productTitle }: ComponentProps) => {
    return (
        <S.ItemList>
            <S.Wrapper>
                <S.ImageWrapper>
                    <img src={productImageUrl} alt=""/>
                </S.ImageWrapper>
                <S.ProductDetails>
                    <S.ProductTitle>
                        {productTitle}
                    </S.ProductTitle>
                    <S.ProductDetailsButtonsWrapper>
                        <S.ViewButton>
                            View
                        </S.ViewButton>

                        <S.HeartButton>
                            <FaRegHeart />
                        </S.HeartButton>
                    </S.ProductDetailsButtonsWrapper>
                </S.ProductDetails>
            </S.Wrapper>
        </S.ItemList>
    );
};

export default App;