import React, { useEffect } from "react";
import { GroupRadio } from "../../../componentes/Radio/GroupRadio";
import { Row, Col } from "react-grid-system";
import { Botao } from "../../../componentes/Botao/Botao";
import { Link, useNavigate } from "react-router-dom";
import { CabecalhoCadastro } from "../../../componentes/CabecalhoCadastro/Index";
import { useCadastroUsuarioContext } from "../../../context/register/Index";

const opcoes = [
  {
    valor: 1,
    label: "TI e Programação",
  },
  {
    valor: 2,
    label: "Design e Multimídia",
  },
  {
    valor: 3,
    label: "Revisão",
  },
  {
    valor: 4,
    label: "Tradução",
  },
  {
    valor: 5,
    label: "Transcrição",
  },
  {
    valor: 6,
    label: "Marketing",
  },
];

export const Interested = () => {
  const { usuario, setInteresse, possoSelecionarInteresse } = useCadastroUsuarioContext();
  const navegar = useNavigate();

  useEffect(() => {
    if (!possoSelecionarInteresse()) {
      navegar("/cadastro");
    }
  }, [navegar, possoSelecionarInteresse]);

  return (
    <>
      <CabecalhoCadastro titulo={"Crie seu cadastro"} subtitulo={"Qual é a área de interesse?"} descricao={undefined} />

      <GroupRadio opcoes={opcoes} valor={usuario.interesse} onChange={setInteresse} />

      <Row>
        <Col lg={6} md={6} sm={6}>
          <Link to="/cadastro">
            <Botao variante="secundaria">Anterior</Botao>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <Link to="/cadastro/dados-pessoais">
              <Botao>Próxima</Botao>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};
