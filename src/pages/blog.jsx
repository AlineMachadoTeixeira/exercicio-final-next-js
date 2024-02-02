import Container from "@/components/ui/Container";
import Rodape from "@/components/ui/rodape";
import Head from "next/head";
import serverApi from "./api/server";
serverApi;

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.staus} - ${resposta.statusText}`);
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
  return (
    <>
      <Head>
        <title>Frutado 2024</title>
        <meta name="description" contente="O que os melhores frutos oferece" />
        <meta name="Keywords" content="Frutas, melancia, feira, banana, maça" />
      </Head>
      <section>
        <Container>
          <h2>Nosso contato</h2>
          <p>teste</p>
        </Container>
      </section>

      <Rodape />
    </>
  );
}
