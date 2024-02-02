import Container from "@/components/ui/Container";
import Rodape from "@/components/ui/rodape";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`https://fruityvice.com/api/fruit/all`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    return {
      props: { dados },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return { notFound: true };
  }
}

export default function Blog({ dados }) {
  const frutas = dados;

  return (
    <>
      <Head>
        <title>Frutado 2024</title>
        <meta name="description" content="O que os melhores frutos oferece" />
        <meta name="Keywords" content="Frutas, melancia, feira, banana, maça" />
      </Head>
      <StyledFrutas>
        <Container>
          {frutas.map((fruta) => {
            return (
              <article key={fruta.id} className="card-frutas">
                <h3> {fruta.name} </h3>
                <p> {fruta.family} </p>
                <Link href={`/posts/${fruta.id}`}>
                  <button>Saiba Mais!</button>
                </Link>
                <h4>Nutrições</h4>

                <ul>
                  <li>Calorias: {fruta.nutritions.calories}</li>
                  <li>Açúcar: {fruta.nutritions.sugar}</li>
                  <li>Carboidratos:{fruta.nutritions.carbohydrates}</li>
                  <li>Proteína:{fruta.nutritions.protein}</li>
                </ul>
              </article>
            );
          })}
        </Container>
      </StyledFrutas>

      <Rodape />
    </>
  );
}

const StyledFrutas = styled.article`
  .card-frutas {
    background-color: #fff;
    border-radius: var(--borda-arredondada);
    box-shadow: var(--sombra-box);
    padding: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }
  h3 {
    font-family: "Fira Sans", sans-serif;
    font-weight: 600;
    font-size: 22px;
    color: var(--cor-primaria-titulo);
    margin-bottom: 8px;
  }

  p {
    font-family: var(--fonte-geral);
    color: var(--cor-primaria-texto);
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 10px;
  }

  h4 {
    font-family: "Fira Sans", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: var(--cor-primaria-texto);
    margin-bottom: 8px;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    font-family: var(--fonte-geral);
    color: var(--cor-primaria-texto);
    font-weight: 300;
    font-size: 16px;
    color: #4a222b;
    margin-bottom: 8px;
  }

  button {
    background-color: var(--botao);
    width: 100px;
    height: 40px;
    border: none;
    box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-weight: 400;
    font-size: 15px;
    color: #fff;
    margin-bottom: 10px;

    &:hover {
      background-color: var(--botao-hover);
    }
  }
`;
