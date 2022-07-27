import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
      <div className="wrapper"></div>
      <div className="container-fluid all-show">
        <a className="navbar-brand" href="#">
          E-Commerce <i className="fa fa-codepen"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Productos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Nosotros
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Ayuda
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                contacto
              </a>
            </li>
          </ul>
          <div>
            <CartWidget></CartWidget>
          </div>
        </div>
      </div>
    </nav>
  );
}

function list() {
  return <ItemListContainer></ItemListContainer>;
}

export default NavBar;
