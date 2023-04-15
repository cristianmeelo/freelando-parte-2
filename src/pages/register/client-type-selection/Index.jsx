import React from "react"
import { Link as RouterLink } from "react-router-dom"
import { Tipografia } from "../../../componentes/Tipografia/Tipografia"
import { Col, Row } from "react-grid-system"
import { Link } from "../../../componentes/Link/Link"
import { useCadastroUsuarioContext } from "../../../context/register/Index"

import client from "../../../assets/cliente.png"
import freelancer from "../../../assets/freela.png"

export const ClientTypeSelection = () => {
	const { setPerfil } = useCadastroUsuarioContext();

	return (
		<div style={{ textAlign: "center" }}>
			<Tipografia variante="h1" componente="h1">
				Crie seu cadastro
			</Tipografia>
			<Tipografia variante="h3" componente="h2">
				Como podemos te ajudar?
			</Tipografia>
			<Row>
				<Col md={6} sm={12}>
					<RouterLink to="interesteds" onClick={() => setPerfil("cliente")}>
						<img src={client} alt="client" />
						<Tipografia variante="body" componente="body">
							Sou cliente preciso de um freela!
						</Tipografia>
					</RouterLink>
				</Col>
				<Col md={6} sm={12}>
					<img src={freelancer} alt="freelancer" />
					<Tipografia variante="body" componente="body">
						Sou freela e preciso de um cliente!
					</Tipografia>
				</Col>
			</Row>
			<div>
				<Tipografia variante="body2" componente="body2">
					Já tem conta?
				</Tipografia>
				<p>
					<Link variante="secundaria">Faça login!</Link>
				</p>
			</div>
		</div>
	)
}
