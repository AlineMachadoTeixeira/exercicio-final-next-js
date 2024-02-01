import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Produtos - Frutado</title>
        <meta name="description" contente="O que os melhores frutos oferece" />
        <meta name="Keywords" content="Frutas, melancia, feira, banana, maça" />
      </Head>
      <section>
        <h3>O que elas fazem por você?</h3>
        <ul>
          <li>
            <strong>Nutrientes Essenciais:</strong> Vitaminas e minerais
            fortalecem o sistema imunológico e promovem saúde.
          </li>
          <li>
            <strong>Antioxidantes Protetores:</strong>Combatem radicais livres,
            reduzindo o envelhecimento precoce e risco de doenças.
          </li>
          <li>
            <strong>Energia Sustentável:</strong>Açúcares naturais fornecem
            energia estável ao longo do dia.
          </li>
          <li>
            <strong>Hidratação Natural:</strong>Alto teor de água contribui para
            a hidratação do corpo.
          </li>
        </ul>
      </section>
    </>
  );
}
