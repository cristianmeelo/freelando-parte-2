import React from 'react'
import { Tipografia } from '../../../componentes/Tipografia/Tipografia'
import { Col, Row } from 'react-grid-system'

import client from "../../../assets/cliente.png"
import freelancer from "../../../assets/freela.png"

export const ClientTypeSelection = () => {
    return (
        <>
            <Tipografia variante="h1" componente="h1">
                Crie seu cadastro
            </Tipografia>
            <Tipografia variante="h3" componente="h2">
                Como podemos te ajudar?
            </Tipografia>
            <Row>
                <Col md={6} sm={12}>
                    <img src={client} alt="client" />
                </Col>
                <Col md={6} sm={12}>
                    <img src={freelancer} alt="freelancer" />
                </Col>
            </Row>
        </>
    )
}
