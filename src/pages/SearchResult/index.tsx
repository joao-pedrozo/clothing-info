import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import api from '../../services/api';

interface CustomRouterProp {
    s: string;
}

interface HomeProps extends RouteComponentProps<CustomRouterProp>{}

const App: React.FC<HomeProps> = ({ location }) => {
    useEffect(() => {
        async function fetchData(){
            api.get('/browse?&_search=yeezy&dataType=product').then(response => {
                console.log(response);
            })
        }
        fetchData();
    }, []);

    return (
        <h1>teste</h1>
    )
};

export default App;