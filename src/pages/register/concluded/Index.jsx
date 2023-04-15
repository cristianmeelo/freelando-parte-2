import React from "react"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { Tipografia } from "../../../componentes/Tipografia/Tipografia"
import { Row, Col } from "react-grid-system"
import { Botao } from "../../../componentes/Botao/Botao"

import concludedClient from "../../../assets/cliente-concluido.png"

const ImagemEstilizada = styled.img`
	max-width: 100%;
	border-radius: 16px;
`

export const Concluded = () => {
	return (
		<>
			<div style={{ textAlign: "center" }}>
				<Tipografia variante="h1" componente="h1">
					Seu perfil está completo!
				</Tipografia>
				<Tipografia variante="body" componente="body">
					Agora é só começar a se conectar com os melhores freelancers do mercado!
				</Tipografia>
			</div>
			<Row>
				<figure>
					<ImagemEstilizada src={concludedClient} alt="person" />
				</figure>
			</Row>
			<Row justify="center">
				<Col lg={6} md={6} sm={6} style={{ textAlign: "center" }}>
					<Link to="/">
						<Botao variante="secundaria">Voltar para a home</Botao>
					</Link>
				</Col>
			</Row>
		</>
	)
}
