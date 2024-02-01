import Link from "next/link";
import styled from "styled-components";

export default function Menu() {
  return (
    <StyledNav>
      <Link className={linkAtivo === "/" ? "ativo" : ""} href="/">
        Início
      </Link>

      <Link className={linkAtivo === "/blog" ? "ativo" : ""} href="/blog">
        Blog
      </Link>

      <Link className={linkAtivo === "/contato" ? "ativo" : ""} href="/contato">
        Contato
      </Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  a.ativo {
    background-color: var(--botao-hover);
  }
`;
