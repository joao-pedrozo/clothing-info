import { ComponentProps } from '.';
import styled from 'styled-components';
import Button from '../Button';

interface ImageProps {
    imageUrl: string;
}

export const ItemList = styled.li`
    margin: 10px;
`;

export const Wrapper = styled.div`
    border: 1px solid #dadada;
    width: 200px;
    height: 200px;
    padding: 16px;

`;

export const ImageWrapper = styled.div`
    max-width: 150px;

    img {
        width: 100%;
    }
`;

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProductDetailsButtonsWrapper = styled.div`
    display: flex;
`;

export const ProductTitle = styled.h3`
    font-size: 16px;
    font-weight: 400;
`;

export const ViewButton = styled(Button)`
    margin-right: 10px;
    padding: 7px 45px;
`

export const HeartButton = styled(Button)`
    display: flex;
    padding: 7px 15px;
`