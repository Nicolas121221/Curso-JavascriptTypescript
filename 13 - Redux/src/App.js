import React from 'react';
import { Router } from 'react-router-dom/';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store/index.js';
import history from './services/history.js';
import GlobalStyles from './styles/GlobalStyles.js';
import Header from './components/Header/index.js';
import Routes from './routes/index.js';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Header />
                    <Routes />
                    <GlobalStyles />
                    <ToastContainer
                        autoClose={3000}
                        className="toast-container"
                    />
                </Router>
            </PersistGate>
        </Provider>
    );
}
