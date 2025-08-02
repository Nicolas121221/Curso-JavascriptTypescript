import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { Container } from '../../styles/GlobalStyles';
import { Form, ProfilePicture, Title } from './styled';
import { isEmail, isInt, isFloat } from 'validator';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom';

export default function Aluno({ match }) {
    const dispatch = useDispatch();
    const id = get(match, 'params.id', '');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [foto, setFoto] = useState('');
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        if (!id) return;

        async function getData() {
            try {
                setIsLoading(true);
                const { data } = await axios.get(`/alunos/${id}`);
                const Foto = get(data, 'Fotos[0].url', '');

                setNome(data.nome);
                setSobrenome(data.sobrenome);
                setEmail(data.email);
                setIdade(data.idade);
                setPeso(data.peso);
                setAltura(data.altura);

                setFoto(Foto);

                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                const status = get(err, 'response.status', 0);
                const errors = get(err, 'response.data.errors', []);

                if (status === 400) errors.map((error) => toast.error(error));
                history.push('/');
            }
        }
        getData();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        let formErrors = false;

        if (nome.length < 3 || nome.length > 255) {
            toast.error('Nome precisa ter entre 3 e 255 caracteres');
            formErrors = true;
        }

        if (sobrenome.length < 3 || sobrenome.length > 255) {
            toast.error('Nome precisa ter entre 3 e 255 caracteres');
            formErrors = true;
        }

        if (!isEmail(email)) {
            toast.error('E-mail inválido');
            formErrors = true;
        }

        if (!isInt(String(idade))) {
            toast.error('Idade inválida');
            formErrors;
        }
        if (!isFloat(String(peso))) {
            toast.error('Peso inválida');
            formErrors;
        }
        if (!isFloat(String(altura))) {
            toast.error('Altura inválida');
            formErrors;
        }

        if (formErrors) return;
        try {
            setIsLoading(true);
            if (id) {
                await axios.put(`/alunos/${id}`, {
                    nome,
                    sobrenome,
                    email,
                    idade,
                    peso,
                    altura,
                });
                toast.success('Aluno(a) editado com sucesso!');
            } else {
                const { data } = await axios.post(`/alunos/`, {
                    nome,
                    sobrenome,
                    email,
                    idade,
                    peso,
                    altura,
                });
                history.push(`/aluno/${data.id}/edit`);
                toast.success('Aluno(a) criado com sucesso!');
            }
            setIsLoading(false);
        } catch (err) {
            const status = get(err, 'reponse.status', 0);
            const data = get(err, 'response.data', {});
            const errors = get(data, 'erros', []);

            if (errors.length > 0) {
                errors.map((error) => toast.error(error));
            } else {
                toast.error('Erro desconhecido');
            }

            if (status === 401) {
                dispatch(actions.loginFailure());
            }
            setIsLoading(false);
        }
    }

    return (
        <Container>
            <Loading isLoading={isLoading} />

            <Title>{id ? 'Editar Aluno' : 'Novo Aluno'}</Title>

            {id && (
                <ProfilePicture>
                    {foto ? (
                        <img src={foto} alt={nome} />
                    ) : (
                        <FaUserCircle size={180} />
                    )}

                    <Link to={`/fotos/${id}`}>
                    <FaEdit size={24} />
                    </Link>
                </ProfilePicture>
            )}
            <Form onSubmit={handleSubmit}>
                <label htmlFor="nome">
                    Nome:
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome"
                    />
                </label>
                <label htmlFor="sobrenome">
                    Sobrenome:
                    <input
                        type="text"
                        value={sobrenome}
                        onChange={(e) => setSobrenome(e.target.value)}
                        placeholder="Sobrenome"
                    />
                </label>
                <label htmlFor="email">
                    E-mail:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                    />
                </label>
                <label htmlFor="idade">
                    Idade:
                    <input
                        type="number"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        placeholder="Idade"
                    />
                </label>
                <label htmlFor="peso">
                    Peso:
                    <input
                        type="text"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        placeholder="Peso"
                    />
                </label>
                <label htmlFor="altura">
                    Altura:
                    <input
                        type="text"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        placeholder="Altura"
                    />
                </label>

                <button type="submit">Enviar</button>
            </Form>
        </Container>
    );
}

Aluno.propTypes = {
    match: PropTypes.shape({}).isRequired,
    isLoading: PropTypes.bool,
};
