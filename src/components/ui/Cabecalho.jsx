import Link from "next/link";

export default function Cabecalho() {
  return (
    <header>
      <h1>
        {/* <Image
            src="/images/logo.png"
            width={48}
            height={48}
            alt="Patinha dentro de um coração"
          /> */}
        Frutado
        <Link href="/">PetShop</Link>
      </h1>
      {/* <Menu /> */}
    </header>
  );
}
