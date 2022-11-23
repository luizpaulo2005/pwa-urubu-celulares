import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/navbar";

export const getServerSideProps = async () => {
  const response = await axios.get(
    "https://api-produtos-ptas3-luizp.cyclic.app/produtos"
  );
  const attributes = await response.data;
  return {
    props: {
      attributes,
    },
  };
};

const Produtos = ({ attributes }) => {
  return (
    <div className="container-fluid g-0">
      <Head>
        <title>Urubu Celulares</title>
      </Head>
      <NavBar />
      <div className="container d-flex flex-wrap justify-content-center">
        {attributes.map(({ id, nome, descricao, preco, url_image }) => (
          <div className="card m-2" key={id}>
            <Image
              src={"/celular.png"}
              className="card-img-top"
              alt={nome}
              width={100}
              height={250}
            />
            <div className="card-body">
              <h5 className="card-title">{nome}</h5>
              <p className="card-text">{descricao}</p>
              <p className="card-text">{preco}</p>
              <Link href={`/produto/${id}`}>
                <button className="btn btn-primary">Ver Mais</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
