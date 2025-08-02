import React, { useState, useEffect } from 'react';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import { get } from 'lodash';
import history from '../../services/history';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions'

export default function Fotos({ match }) {
    const dispatch = useDispatch();
    const id = get(match, 'params.id', '');
    const [foto, setFoto] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                const { data } = await axios.get(`/alunos/${id}`);
                setFoto(get(data, 'Fotos[0].url', ''));
                setIsLoading(false);
            } catch (error) {
                toast.error('Erro ao obter a imagem');
                setIsLoading(false);
                history.push('/');
            }
        }
        getData();
    }, []);

    async function handleChange(e) {
        const foto = e.target.files[0];
        const fotoURL = URL.createObjectURL(foto);
        setFoto(fotoURL);

        const formData = new FormData();

        formData.append('aluno_id', id);
        formData.append('file', foto);

        try {
            setIsLoading(true);
            await axios.post('/fotos/', formData, {
                headers: {
                    'Content-Type': "multipart/form-data",
                },
            });

            toast.success('foto enviada com sucesso');
        } catch (err) {
            setIsLoading(false);
            const {status} = get(err, 'response', '')
            toast.error('Erro ao enviar foto')

            if(status === 401) dispatch(actions.loginFailure())
        }
    }

    return (
        <Container>
            <Loading isLoading={isLoading} />

            <Title>Fotos</Title>
            <Form>
                <label htmlFor="foto">
                    {foto ? (
                        <img src={foto} alt="Foto de perfil do usuário" />
                    ) : (
                        'Selecionar'
                    )}
                    <input type="file" id="foto" onChange={handleChange} />
                </label>
            </Form>
        </Container>
    );
}

Fotos.propType = {
    match: PropTypes.shape({}).isRequired,
};
