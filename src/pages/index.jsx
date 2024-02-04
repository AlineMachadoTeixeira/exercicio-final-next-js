import Container from "@/components/ui/Container";
import Rodape from "@/components/ui/rodape";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Produtos - Frutado</title>
        <meta name="description" contente="O que os melhores frutos oferece" />
        <meta name="Keywords" content="Frutas, melancia, feira, banana, maça" />
        <link rel="shortcut icon" href="/images/frutado-logo.svg"></link>
      </Head>
      <StyledHome>
        <Container>
          <section className="conteudo-principal">
            <div className="conteudo-principal-escrito">
              <h2>Descubra o mundo incrível das frutas</h2>
              <p>
                Frutas são super legais! Elas têm sabores diferentes e fazem
                muito bem para a gente. Cheias de coisas boas como fibras e
                vitaminas, ajudam a manter o corpo forte e saudável. Elas são
                amigas da saúde, então, bora comer mais frutas e se sentir super
                bem! 😊🍎🍇🍌
              </p>
              <Link href="/blog">
                <button>Saiba Mais!</button>
              </Link>
            </div>
            <Image
              src="/images/frutas.svg"
              width={300}
              height={300}
              alt="Logo Frutado"
            />
          </section>
          <section className="conteudo-secundario">
            <h3>O que elas fazem por você?</h3>
            <ul>
              <li>
                <strong>Nutrientes Essenciais:</strong> Vitaminas e minerais
                fortalecem o sistema imunológico e promovem saúde.
              </li>
              <li>
                <strong>Antioxidantes Protetores:</strong>Combatem radicais
                livres, reduzindo o envelhecimento precoce e risco de doenças.
              </li>
              <li>
                <strong>Energia Sustentável:</strong>Açúcares naturais fornecem
                energia estável ao longo do dia.
              </li>
              <li>
                <strong>Hidratação Natural:</strong>Alto teor de água contribui
                para a hidratação do corpo.
              </li>
            </ul>
          </section>
        </Container>
      </StyledHome>
      <Rodape />
    </>
  );
}

const StyledHome = styled.section`
  .conteudo-principal {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 1rem;
  }

  .conteudo-principal-escrito {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  h2 {
    font-weight: 600;
    font-size: 40px;
    color: var(--cor-primaria-titulo);
  }
  p {
    font-weight: 400;
    font-size: 24px;
  }
  button {
    background-color: var(--botao);
    width: 180px;
    height: 60px;
    border: none;
    box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    margin-bottom: 10px;

    &:hover {
      background-color: var(--botao-hover);
    }
  }

  .conteudo-secundario {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 48px;
    margin-left: 20px;
    margin-right: 20px;
  }

  h3 {
    border-top: 0.4px solid var(--cor-primaria-texto);
    padding-top: 48px;
    font-weight: 600;
    font-size: 26px;
    color: var(--cor-primaria-titulo);
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
  }

  li {
    font-family: var(--fonte-geral);
    color: var(--cor-primaria-texto);
    font-family: "Fira Sans", sans-serif;
    font-weight: 300;
    font-size: 18px;
    color: #4a222b;
    margin-bottom: 10px;
  }

  /* Adiciona algum estilo para o responsivo */
  @media (max-width: 670px) {
    .conteudo-principal {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .conteudo-principal h2 {
      margin-top: 20px;
      font-size: 30px;
    }

    .conteudo-principal img {
      margin-top: 20px;
      align-self: center;
    }
  }
`;
