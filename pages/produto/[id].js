import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../components/navbar";

export const getServerSideProps = async (context) =>{
    const id = context.query.id;
    const response = await axios.get(`https://api-produtos-ptas3-luizp.cyclic.app/produtos/${id}`);
    const attributes = await response.data
    return {
        props:{
            attributes
        }
    }
}

const ProdutoSolo = ({attributes}) =>{
    return(
        <div className="container-fluid g-0">
            <Head>
                <title>{attributes.nome}</title>
            </Head>
            <NavBar/>
            <div className="container d-flex justify-content-center p-3">
                <div className="card">
                    <Image src="/celular.png" className="card-img-top" width={100} height={250} alt={attributes.nome}/>
                    <div className="card-body">
                    <h5 className="card-title">
                        {attributes.nome}
                    </h5>
                    <p className="card-text">{attributes.descricao}</p>
                    <p className="card-text">Preço: R${attributes.preco}</p>
                    <Link href="/"><button className="btn btn-primary">Voltar para a página inicial</button></Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProdutoSolo;