import React from 'react';
import { useDispatch } from 'react-redux';

import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

import * as exampleActions from '../../store/modules/example/actions'

export default function Login() {
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();

        dispatch(exampleActions.clicaBotaoRequest());
    }

    return (
        <Container>
            <h1>teste</h1>
            <Title>teste</Title>
            <button onClick={handleClick}>Enviar</button>
            <a>123</a>
        </Container>
    );
}
