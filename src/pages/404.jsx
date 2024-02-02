import Container from "@/components/ui/Container";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Pagina404() {
  return (
    <>
      <Head>
        <title>Ops - Frutando</title>
      </Head>
      <Styled404>
        <Container>
          <h2>Ops! NÃO ENCONTRAMOS ESSA PÁGINA!</h2>
          <Image
            src="/images/error.svg" //está na pasta public  / images
            width={300}
            height={500}
            alt="Ilustração laranja caindo"
          />
        </Container>
      </Styled404>
    </>
  );
}

const Styled404 = styled.section`
  text-align: center;
  img {
    max-width: 100%;
    margin-bottom: 0;
  }
  h2 {
    color: var(--cor-primaria-titulo);
    font-weight: 600;
    font-size: 30px;
    margin-top: 30px;
  }
`;
