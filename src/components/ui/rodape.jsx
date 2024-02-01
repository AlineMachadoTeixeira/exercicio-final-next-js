import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Rodape() {
  return (
    <StyledFooter>
      <Link href="/">
        <Image
          className="rodape-imagem"
          src="/images/frutado-rodape.svg"
          width={150}
          height={150}
          alt="Logo Frutado"
        />
      </Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 32px;
  border-top: 0.4px solid #4a222b;

  .rodape-imagem {
    display: block;
    margin: 0 auto;
  }
`;
