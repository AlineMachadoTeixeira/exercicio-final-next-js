import Container from "@/components/ui/Container";
import styled from "styled-components";
import serverApi from "../api/server";
import Link from "next/link";
import Rodape from "@/components/ui/rodape";
serverApi;

export async function getStaticProps({ params }) {
  const { id } = params;
  console.log(id);

  try {
    const resposta = await fetch(`https://fruityvice.com/api/fruit/${id}`);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    const dados = await resposta.json();

    return {
      props: {
        post: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim:" + error.message);

    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Post({ post }) {
  return (
    <>
      <Container>
        <StyledPost>
          <div className="card-frutas">
            <h4>{post.name}</h4>
            <p>
              Familia: <strong>{post.family}</strong>
            </p>

            <h5>
              {" "}
              <strong>Nutrições</strong>
            </h5>
            <ul>
              <li>Calorias: {post.nutritions.calories}</li>
              <li>Açúcar: {post.nutritions.sugar}</li>
              <li>Carboidratos: {post.nutritions.carbohydrates}</li>
              <li>Proteína: {post.nutritions.protein}</li>
            </ul>

            <Link href="/blog">
              <button>Voltar</button>
            </Link>
          </div>
        </StyledPost>
      </Container>

      <Rodape />
    </>
  );
}

const StyledPost = styled.article`
  display: flex;

  margin-top: 20px;

  .card-frutas {
    background-color: #fff;
    background-image: url("/images/fundo.svg");
    background-size: cover;
    /* background-attachment: fixed; */
    border-radius: var(--borda-arredondada);
    box-shadow: var(--sombra-box);
    padding: 20px;
    margin: auto;
    width: 60%;
    text-align: center;
    border: 0.1rem solid var(--botao);
  }

  h4 {
    font-family: "Fira Sans", sans-serif;
    font-weight: 600;
    font-size: 30px;
    color: var(--cor-primaria-titulo);
    margin-top: 0px;
    margin-bottom: 10px;
  }

  h5 {
    font-family: "Fira Sans", sans-serif;
    font-weight: 600;
    font-size: 20px;
    margin-top: 20px;
  }

  p {
    font-family: var(--fonte-geral);
    color: var(--cor-primaria-texto);
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    font-family: var(--fonte-geral);
    color: var(--cor-primaria-texto);
    font-weight: 300;
    font-size: 18px;
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
    margin-top: 10px;

    &:hover {
      background-color: var(--botao-hover);
    }
  }
`;

/* 
 -- "name": "Persimmon",
    "id": 52,
   -- "family": "Ebenaceae",
    "order": "Rosales",
    "genus": "Diospyros",
   -- "nutritions": {
     -- "calories": 81,
      "fat": 0,
     -- "sugar": 18,
     -- "carbohydrates": 18,
     -- "protein": 0
    }


    "nome": "Caqui",
    "id": 52,
    "família": "Ebenáceas",
    "pedido": "Rosales",
    "gênero": "Diospyros",
    "nutrições": {
      "calorias": 81,
      "gordo": 0,
      "açúcar": 18,
      "carboidratos": 18,
      "proteína": 0
    }
     */
