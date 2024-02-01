import styled from "styled-components";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <StyledHeader>
      <h1>
        <Link href="/">
          <Image
            src="/images/frutado-logo.svg"
            width={100}
            height={100}
            alt="Logo Frutado"
          />
        </Link>
        <Menu />
      </h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  h1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 24px;
  }
  nav {
    display: flex;
    gap: 32px;
  }
`;
