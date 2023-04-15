import React, { useState } from 'react'
import { GroupRadio } from '../../../componentes/Radio/GroupRadio'
import { Row, Col } from 'react-grid-system';
import { Botao } from '../../../componentes/Botao/Botao';
import { Link } from 'react-router-dom';
import { CabecalhoCadastro } from '../../../componentes/CabecalhoCadastro/Index';


const options = [
    {
        value: 1,
        label: "TI e Programação",
    },
    {
        value: 2,
        label: "Design e Multimídia",
    },
    {
        value: 3,
        label: "Revisão",
    },
    {
        value: 4,
        label: "Tradução",
    },
    {
        value: 5,
        label: "Transcrição",

    },
    {
        value: 6,
        label: "Marketing",
    }
];

export const Interested = () => {
    const [option, setOption] = useState("")
    return (
        <>
            <CabecalhoCadastro
                titulo={"Crie seu cadastro"}
                subtitulo={"Qual é a área de interesse?"}
                descricao={undefined}
            />

            <GroupRadio opcoes={options} valor={option} onChange={setOption} />
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <Link to="/cadastro">
                        <Botao variante="secundaria">
                            Anterior
                        </Botao>
                    </Link>

                </Col>
                <Col lg={6} md={6} sm={6}>
                    <div style={{ textAlign: 'right' }}>
                        <Link to="/cadastro/dados-pessoais">
                            <Botao>
                                Próxima
                            </Botao>
                        </Link>
                    </div>
                </Col>
            </Row>
        </>
    )
}
