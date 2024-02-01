import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Frutado 2024</title>
        <meta
          name="description"
          contente="Dúvidas ou sugestões entre em contato conosco"
        />
        <meta name="Keywords" content="Frutas,contato" />
      </Head>

      <StyledContato>
        <Container>
          <h3>Fale Conosco</h3>

          <form action="" method="post">
            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" id="nome" />
            </div>
            <div>
              <label htmlFor="mensagem">E-mail:</label>
              <input type="email" name="email" id="email" />
            </div>

            <div>
              <label htmlFor="email">
                Mensagem: <br />
              </label>
              <textarea
                maxLength={500}
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="8"
              ></textarea>
            </div>

            <div>
              <button type="submit">Enviar mensagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}

const StyledContato = styled.section`
  h3 {
    text-align: center;
  }

  // Início Formulário

  form {
    max-width: 50%;
    margin: 0 auto;
    font-family: var(--fonte-geral);
    font-size: 20px;
  }

  div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    color: var(--cor-primaria-texto);
    font-weight: 400;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
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

  /* Adiciona um estilo específico para o textarea */
  textarea {
    resize: vertical;
  }

  /* Adiciona algum estilo para o formulário responsivo */
  @media (max-width: 600px) {
    form {
      max-width: 80%;
    }
  }

  // Fim Formulário
`;
