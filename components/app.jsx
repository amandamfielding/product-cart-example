import React from 'react';
import HeaderContainer from './header/header_container';
import EasyTransition from 'react-easy-transition';

const App = ({ children, location }) => (

    <EasyTransition
        path={location.pathname}
        initialStyle={{opacity: 0}}
        transition="opacity 0.1s ease-in"
        finalStyle={{opacity: 1}}
    >
        <HeaderContainer />
        {children}
    </EasyTransition>
);

export default App;
