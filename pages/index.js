import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/navbar";

export default function Home({ attributes }) {
  return (
    <div className="container-fluid g-0">
      <Head>
        <title>Urubu Celulares</title>
      </Head>
      <NavBar />
      <div className="container d-flex align-items-center justify-content-center">
        <div className="cartaonxt">
          <Link href="/produtos">
            <h2>Veja nossos produtos</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
