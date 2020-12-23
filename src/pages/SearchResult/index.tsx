import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import api from '../../services/api';
import ProductResultItem from '../../components/ProductResultItem';
import * as S from './styles';

interface Product {
    id: string;
    shoe: string;
    media: {
        smallImageUrl: string;
    }
}

const App: React.FC<RouteComponentProps> = ({ location }) => {

    const [products, setProducts] = useState<Product[]>([]);

    async function fetchData(){
        await api.get('/browse?&_search=jordan&dataType=product').then(response => {
            setProducts(response.data.Products);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <S.Wrapper>
            <S.ItemsList>
            {products.map(product => (
                <ProductResultItem productImageUrl={product.media.smallImageUrl} productTitle={product.shoe}/>
            ))}
            </S.ItemsList>
        </S.Wrapper>
    )
};

export default App;