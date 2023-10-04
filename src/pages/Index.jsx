import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-grid-system";
import { Cabecalho } from "../componentes/Cabecalho/Cabecalho";
import { FreelandoLogo } from "../componentes/Icones/FreelandoLogo";
import { Link } from "../componentes/Link/Link";
import { IconeInstagram } from "../componentes/Icones/IconeInstagram";
import { IconeTwitch } from "../componentes/Icones/IconeTwitch";
import { IconeTwitter } from "../componentes/Icones/IconeTwitter";
import { IconeWhatsApp } from "../componentes/Icones/IconeWhatsApp";
import { ItemListaInline } from "../componentes/Lista/ItemListaInline";
import { ListaInline } from "../componentes/Lista/ListaInline";
import { Rodape } from "../componentes/Rodape/Rodape";
import { Tipografia } from "../componentes/Tipografia/Tipografia";
import { Botao } from "../componentes/Botao/Botao";

export const LayoutBase = () => {
  return (
    <>
      <Cabecalho>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo />
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Link>Login</Link>
            </Col>
            <LinkRouter to="/cadastro">
              <Botao>Home</Botao>
            </LinkRouter>
          </Row>
        </Container>
      </Cabecalho>

      <Container style={{ minHeight: "66vh" }}>
        <Outlet />
      </Container>

      <Rodape>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo height={40} width={176} />
              <Tipografia variante="legenda" componente="legenda">
                Desenvolvido por Cristian & Alura. Projeto fictício sem fins comerciais.
              </Tipografia>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Tipografia variante="legenda" componente="legenda">
                Acesse nossas redes:
              </Tipografia>
              <ListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para o WhatsApp">
                    <IconeWhatsApp />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Twitch">
                    <IconeTwitch />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Instagram">
                    <IconeInstagram />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Twitter">
                    <IconeTwitter />
                  </a>
                </ItemListaInline>
              </ListaInline>
            </Col>
          </Row>
        </Container>
      </Rodape>
    </>
  );
};
