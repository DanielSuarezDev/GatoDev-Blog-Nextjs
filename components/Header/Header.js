import React from "react";
import { Navigation } from "../Nav/Navigation";
import { Search } from "../Search/Search";
import Link from "next/link";
import styles from "./style.module.css";
import styled from "@emotion/styled";
import Boton from "../Botton/Boton";

const ContainerHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Logo = styled.p`
  color: #da552f;
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  cursor: pointer;
`;
const Login = styled.p`
  display: flex;
  align-items: center;
`;

export const Header = () => {
  return (
    <header className={styles.header}>
      <ContainerHeader>
        <div>
          <Link href="/">
            <Logo>GatoDev</Logo>
          </Link>
          <Search />
          <Navigation />
        </div>
        <Login>
          <p>Hola</p>
          <Boton bgColor="true">Cerrar sesion</Boton>
          <Link href="/">
            <Boton bgColor="true">Login</Boton>
          </Link>
          <Link href="/">Crear Cuenta</Link>
        </Login>
      </ContainerHeader>
    </header>
  );
};
