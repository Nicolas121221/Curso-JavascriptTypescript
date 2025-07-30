import React from 'react';
import { BrowserRouter } from 'react-router-dom/';

import GlobalStyles from './styles/GlobalStyles.js';
import Header from './components/header/index.js';
import Routes from './routes/index.js';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyles />
        </BrowserRouter>
    );
}
