import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import get from 'lodash';
import { NovoAluno } from './styled';

import {
    FaUserCircle,
    FaEdit,
    FaWindowClose,
    FaExclamation,
} from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styled';

import axios from '../../services/axios';

import Loading from '../../components/Loading';
import { toast } from 'react-toastify';

export default function Alunos() {
    const [alunos, setAlunos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            const response = await axios.get('/alunos');
            setAlunos(response.data);
            setIsLoading(false);
        }

        getData();
    }, []);

    function handleDeleteAsk(e) {
        e.preventDefault();
        const exclamation = e.currentTarget.nextSibling;
        exclamation.setAttribute('display', 'block');
        e.currentTarget.remove();
    }

    async function handleDelete(e, id, index) {
        e.persist();
        try {
            setIsLoading(true);
            await axios.delete(`/alunos/${id}`);
            const novosAlunos = [...alunos];

            novosAlunos.splice(index, 1);
            setAlunos(novosAlunos);
            setIsLoading(false);
        } catch (e) {
            const status = get(e, 'response.status', 0);

            if (status === 401) {
                toast.error('Você precisa fazer o login');
            } else {
                toast.error('Ocorreu um erro ao excluir o aluno');
            }
            setIsLoading(false);
        }
    }

    return (
        <Container>
            <Loading isLoading={isLoading} />

            <h1>Alunos</h1>
            <NovoAluno to='/aluno/'>Novo aluno</NovoAluno>


            <AlunoContainer>
                {alunos.map((aluno, index) => (
                    <div key={String(aluno.id)}>
                        <ProfilePicture>
                            {get(aluno, 'Fotos[0].url', 0) && aluno.Fotos[0] ? (
                                <img src={aluno.Fotos[0].url} alt="" />
                            ) : (
                                <FaUserCircle size={36} />
                            )}
                        </ProfilePicture>

                        <span>{aluno.nome}</span>
                        <span>{aluno.email}</span>

                        <Link to={`/aluno/${aluno.id}/edit`}>
                            <FaEdit size={16} />
                        </Link>
                        <Link
                            onClick={handleDeleteAsk}
                            to={`/aluno/${aluno.id}/delete`}
                        >
                            <FaWindowClose size={16} />
                        </Link>

                        <FaExclamation
                            size={16}
                            display="none"
                            cursor="pointer"
                            onClick={(e) => handleDelete(e, aluno.id, index)}
                        />
                    </div>
                ))}
            </AlunoContainer>
        </Container>
    );
}
