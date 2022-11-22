import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import NavBar from "../components/navbar";

const CadastrarProdutos = () => {
  const [produto, setProduto] = useState({
    nome: "",
    descricao: "",
    preco: "",
    url_image: "",
  });

  let router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emptyFieldCheck = Object.values(produto).some(
      (element) => element === ""
    );
    if (emptyFieldCheck) {
      toast.error("Preencha todos os campos");
      return;
    }

    const data = {
      ...produto,
    };

    const response = await axios.post(
      "https://api-produtos-ptas3-luizp.cyclic.app/produtos",
      data
    );

    if (!response.statusText === "OK") {
      toast.error("Erro ao cadastrar o produto");
    } else {
      toast.success("Produto cadastrado com sucesso");
      router.push("/");
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProduto({ ...produto, [id]: value });
  };

  const { nome, descricao, preco, url_image } = produto;

  return (
    <div className="container-fluid g-0">
      <Head>
        <title>Cadastro de Produto</title>
      </Head>
      <NavBar />
      <ToastContainer />
      <div className="container border rounded mt-2 p-3">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Cadastrar Produto</legend>
            <div class="input-group mb-3">
              <span class="input-group-text" id="nome">
                Nome
              </span>
              <input
                onChange={handleInputChange}
                type="text"
                class="form-control"
                aria-label="nome"
                aria-describedby="nome"
                id="nome"
                name="nome"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="descricao">
                Descrição
              </span>
              <input
                onChange={handleInputChange}
                type="text"
                class="form-control"
                aria-label="descricao"
                aria-describedby="descricao"
                id="descricao"
                name="descricao"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="preco">
                Preço
              </span>
              <input
                onChange={handleInputChange}
                type="text"
                class="form-control"
                aria-label="preco"
                aria-describedby="preco"
                id="preco"
                name="preco"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="url_image">
                Link da Imagem
              </span>
              <input
                onChange={handleInputChange}
                type="text"
                class="form-control"
                aria-label="url_image"
                aria-describedby="url_image"
                id="url_image"
                name="url_image"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CadastrarProdutos;
