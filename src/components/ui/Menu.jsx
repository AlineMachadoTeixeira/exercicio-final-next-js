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
        Frutas
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
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  a:hover {
    color: var(--botao-hover);
    padding: 8px 16px;
    border-radius: 20px;
  }
  a.ativo {
    background-color: var(--botao);
    padding: 8px 16px;
    border-radius: 20px;
    color: #fff;
  }

  @media (max-width: 670px) {
    font-size: 18px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

/**/
