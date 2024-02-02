import Container from "@/components/ui/Container";
import styled from "styled-components";
import serverApi from "../api/server";
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
      <StyledPost>
        <Container>
          <div>
            <h3>{post.name}</h3>
            <p>{post.family}</p>

            <ul>
              <li>{post.nutritions.sugar}sugar</li>
              <li>{post.nutritions.carbohydrates}carbohydrates</li>
              <li>{post.nutritions.protein}protein</li>
            </ul>
          </div>
        </Container>
      </StyledPost>
    </>
  );
}

const StyledPost = styled.article`
  div {
    background-color: #fff;
    border-radius: var(--borda-arredondada);
    box-shadow: var(--sombra-box);
    padding: 20px;
    margin-bottom: 20px;
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
