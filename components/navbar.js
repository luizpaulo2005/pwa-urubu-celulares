import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link href="/">
          <button className="navbar-brand btn">Urubu Celulares</button>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/cad_produtos">
                <a className="nav-link active" aria-current="page">
                  Cadastre seu Produto
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://github.com/luizpaulo2005"
              >
                Meu GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/luizpaulo2005/frontend-projetofinal-ptas3"
              >
                GitHub do Projeto
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/luizpaulo2005/backend-projetofinal-ptas3"
              >
                GitHub da API
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
