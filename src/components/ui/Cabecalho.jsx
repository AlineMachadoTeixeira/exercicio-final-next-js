import styled from "styled-components";

export default function Cabecalho() {
  return (
    <StyledHeader>
      <h1>
        <Link href="/">
          <Image
            src="/images/frutado-logo.svg"
            width={48}
            height={48}
            alt="Logo Frutado"
          />
        </Link>
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

    /* Imagem não mexi no css */
  }
`;
