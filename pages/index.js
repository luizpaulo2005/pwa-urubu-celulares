import axios from "axios";
import Head from "next/head";
import Image from "next/image";
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

export default function Home({ attributes }) {
  return (
    <div classNameName="container-fluid g-0">
      <Head>
        <title>Minha Loja</title>
      </Head>
      <NavBar />
      <div className="container row-cols-auto">
        {attributes.map(({ id, nome, descricao, preco, url_image }) => (
          <div className="card col-lg-3 col-md-6 col-sm-12" key={id}>
            <Image /* src={url_image} */ class="card-img-top" alt={nome} width={100} height={100}/>
            <div class="card-body">
              <h5 class="card-title">{nome}</h5>
              <p class="card-text">
                {descricao}
              </p>
              <p className="card-text">
                {preco}
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
