import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface CustomRouterProp {
    slug: string;
}

interface HomeProps extends RouteComponentProps<CustomRouterProp>{}
    

const App: React.FC<HomeProps> = ({ match }) => {
    useEffect(() => {
        console.log(match);
    },[match]);

    return(
        <h1>{match.params.slug}</h1>
    )
};

export default App;