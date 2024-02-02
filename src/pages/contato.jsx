import Container from "@/components/ui/Container";
import Rodape from "@/components/ui/rodape";
import Head from "next/head";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let router = useRouter();

  const enviarContato = async (dados) => {
    const { nome, email, mensagem } = dados;

    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    try {
      await fetch(`https://fruityvice.com/api/fruit`, opcoes);
      alert("Dados enviados!");
      router.push("/");
    } catch (error) {
      console.error("Deu ruim no envio: " + error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Frutado 2024</title>
        <meta
          name="description"
          content="Dúvidas ou sugestões entre em contato conosco"
        />
        <meta name="Keywords" content="Frutas,contato" />
      </Head>

      <StyledContato>
        <Container>
          <h3>Fale Conosco</h3>
          <form
            action=""
            method="post"
            onSubmit={handleSubmit((dados) => {
              enviarContato(dados);
            })}
          >
            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                {...register("nome", { required: true })}
                type="text"
                name="nome"
                id="nome"
              />
            </div>

            {errors.nome?.type == "required" && <p>Você deve digitar o nome</p>}

            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
              />
            </div>
            {errors.email?.type == "required" && (
              <p>Você deve digitar o e-mail</p>
            )}

            <div>
              <label htmlFor="menssagem">
                Menssagem: <br />
              </label>
              <textarea
                {...register("mensagem", { required: true, minLength: 20 })}
                name="mensagem"
                id="mensagem"
                maxLength={500}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            {errors.mensagem?.type == "required" && (
              <p>Você deve digitar uma mensagem</p>
            )}
            {errors.mensagem?.type == "minLength" && (
              <p>Escreva pelo menos 20 caracteres</p>
            )}
            <div>
              <button type="submit">Enviar menssagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
      <Rodape />
    </>
  );
}

const StyledContato = styled.section`
  h3 {
    text-align: center;
    font-size: 30px;
  }

  // Início Formulário

  form {
    max-width: 50%;
    margin: 0 auto;
    font-family: var(--fonte-geral);
    font-size: 20px;
  }

  // div {
  //   margin-bottom: 15px;
  // }

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
  width: 100%; /* Alteração aqui para ocupar a largura total */
  height: 50px; /* Ajuste conforme necessário */
  border: none;
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px; /* Ajuste conforme necessário */
  font-weight: 400;
  font-size: 16px; /* Ajuste conforme necessário */
  color: #fff;
  margin-bottom: 10px;

  &:hover {
    background-color: var(--botao-hover);
  }

  p {
    color: var(--botao-hover);
    font-size: 0.8rem;
    margin-top: 0;
    font-style: italic;
    font-weight: 400;
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
