import React, { useState } from 'react'
import { Tipografia } from '../../../componentes/Tipografia/Tipografia'
import { GroupRadio } from '../../../componentes/Radio/GroupRadio'
import { Row, Col } from 'react-grid-system';
import { Botao } from '../../../componentes/Botao/Botao';


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
            <Tipografia variante="h1" componente="h1">
                Crie seu cadastro
            </Tipografia>
            <Tipografia variante="h3" componente="h2">
                Qual é a área de interesse?
            </Tipografia>
            <GroupRadio opcoes={options} valor={option} onChange={setOption} />
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <Botao variante="secundaria">
                        Anterior
                    </Botao>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <div style={{ textAlign: 'right' }}>
                        <Botao>
                            Próxima
                        </Botao>
                    </div>
                </Col>
            </Row>
        </>
    )
}
