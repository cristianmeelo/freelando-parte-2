import React from "react"
import { Row, Col } from "react-grid-system"
import { Botao } from "../../../componentes/Botao/Botao"
import { Link, useNavigate } from "react-router-dom"
import { CampoTexto } from "../../../componentes/CampoTexto/CampoTexto"
import { ListaSupensa } from "../../../componentes/ListaSuspensa/ListaSuspensa"
import { estadosBrasileiros } from "../../../helpers/states"
import { CabecalhoCadastro } from "../../../componentes/CabecalhoCadastro/Index"
import { useCadastroUsuarioContext } from "../../../context/register/Index"


export const PersonalData = () => {
	const { usuario, setNomeCompleto, setCidade, setEmail, setSenha, setSenhaConfirmada, setUf, submeterUsuario } = useCadastroUsuarioContext();
	const navegar = useNavigate();

	const finalizarCadastro = (evento) => {
		evento.preventDefault();
		submeterUsuario();
		navegar("/cadastro/concluido");
	}

	return (
		<form onSubmit={finalizarCadastro}>
			<CabecalhoCadastro titulo={"Crie seu cadastro"} subtitulo={undefined} descricao={"Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho."} />

			<Row>
				<Col>
					<CampoTexto titulo="Nome Completo" valor={usuario.nomeCompleto} onChange={setNomeCompleto} />
				</Col>
			</Row>
			<Row>
				<Col lg={4} md={4} sm={4}>
					<ListaSupensa titulo="Estado" opcoes={estadosBrasileiros} valor={usuario.uf} onChange={setUf} />
				</Col>
				<Col lg={8} md={8} sm={8}>
					<CampoTexto titulo="Cidade" valor={usuario.cidade} onChange={setCidade} />
				</Col>
			</Row>
			<Row>
				<Col>
					<CampoTexto titulo="E-mail" valor={usuario.email} onChange={setEmail} tipo={"email"} />
				</Col>
			</Row>
			<Row>
				<Col lg={6} md={6} sm={6}>
					<CampoTexto titulo="Senha" valor={usuario.senha} onChange={setSenha} tipo={"password"} />
				</Col>
				<Col lg={6} md={6} sm={6}>
					<CampoTexto titulo="Repita a Senha" valor={usuario.senhaConfirmada} onChange={setSenhaConfirmada} tipo={"password"} />
				</Col>

				<Row>
					<Col lg={6} md={6} sm={6}>
						<Link to="/cadastro/interesteds">
							<Botao variante="secundaria">Anterior</Botao>
						</Link>
					</Col>
				</Row>

				<Col lg={6} md={6} sm={6}>
					<div style={{ textAlign: "right" }}>
						{/* <Link to="/cadastro/concluido"> */}
						<Botao>Próxima</Botao>
						{/* </Link> */}
					</div>
				</Col>
			</Row>
		</form>
	)
}
