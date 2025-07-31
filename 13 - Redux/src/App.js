import React from 'react';
import { Router } from 'react-router-dom/';
import { ToastContainer } from 'react-toastify';


import history from './services/history.js';
import GlobalStyles from './styles/GlobalStyles.js';
import Header from './components/header/index.js';
import Routes from './routes/index.js';

export default function App() {
    return (
        <Router history={history}>
            <Header />
            <Routes />
            <GlobalStyles />
            <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
    );
}
