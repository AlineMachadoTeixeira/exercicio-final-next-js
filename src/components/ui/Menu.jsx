/* 
falta exportação dos:
import Link from "next/link";
import styled from "styled-components" */

export default function Menu() {
  <StyledNav classNames="cabecalho-menu">
    <Link classNames="cabecalho-menu" href="/produto">
      Frutas
    </Link>
    <Link classNames="cabecalho-menu" href="/sobre">
      Sobre
    </Link>
    <Link classNames="cabecalho-menu" href="/contato">
      Frutas
    </Link>
  </StyledNav>;
}

const StyledNav = styled.nav`
.cabecalho-menu {
    display: flex;
    gap: 32px;
  }
  
  .cabecalho-menu-item {
    font-family: var(--fonte-geral);, sans-serif;    
    color: #4a222b;
    font-weight: 600;
    font-size: 20px;
  }


`;
