import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import * as actions from '../../store/modules/auth/actions';

import { Form } from './styled';

import Loading from '../../components/Loading';

export default function Login(props) {
    const dispatch = useDispatch();

    const prevPath = get(props, 'location.state.prevPath', '/');

    const isLoading = useSelector(state => state.auth.isLoading)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSumbit(e) {
        e.preventDefault();
        let formErrors = false;

        if (!isEmail(email)) {
            formErrors = true;
            toast.error('E-mail inválido');
        }
        if (password.length < 3 || password.length > 255) {
            formErrors = true;
            toast.error('senha inválida');
        }

        if (formErrors) return;
        dispatch(actions.loginRequest({ email, password, prevPath }));
    }

    return (
        <Container>
            <Loading isLoading={isLoading} />

            <h1>Login</h1>

            <Form onSubmit={handleSumbit}>
                <label htmlFor="email">
                    E-mail:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Seu E-mail"
                    />
                </label>

                <label htmlFor="password">
                    Senha:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Sua senha"
                    />
                </label>

                <button type="submit">Acessar</button>
            </Form>
        </Container>
    );
}
