import styled from 'styled-components';

export const Wrapper = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    padding: 5px;
    max-width: 250px; 
`;

export const Input = styled.input`
    border: none;
    display: flex;
    width: 100%;

    &:focus {
        outline: none;
    } 
`;
