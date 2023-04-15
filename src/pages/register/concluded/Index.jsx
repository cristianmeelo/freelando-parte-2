import React from "react"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { Row, Col } from "react-grid-system"
import { Botao } from "../../../componentes/Botao/Botao"

import concludedClient from "../../../assets/cliente-concluido.png"
import { CabecalhoCadastro } from "../../../componentes/CabecalhoCadastro/Index"

const ImagemEstilizada = styled.img`
	max-width: 100%;
	border-radius: 16px;
`

export const Concluded = () => {
	return (
		<>
			<CabecalhoCadastro titulo={"Seu perfil está completo!"} subtitulo={undefined} descricao={"Agora é só começar a se conectar com os melhores freelancers do mercado!"} />

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
