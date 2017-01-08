import React from 'react';
import Header from './header';
import EasyTransition from 'react-easy-transition';

const App = ({ children, location }) => (

    <EasyTransition
        path={location.pathname}
        initialStyle={{opacity: 0}}
        transition="opacity 0.1s ease-in"
        finalStyle={{opacity: 1}}
    >
        <Header />
        {children}
    </EasyTransition>
);

export default App;
