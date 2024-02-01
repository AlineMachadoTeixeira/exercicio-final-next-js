import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export default function Menu() {
  const linkAtivo = usePathname();
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
  a {
    font-family: var(--fonte-geral);
    color: var(--cor-primaria-texto);
    font-weight: 600;
    font-size: 20px;
  }
  a.ativo {
    background-color: var(--botao-hover);
    padding: 8px;
    border-radius: 20px;
    color: #fff;
  }
`;
