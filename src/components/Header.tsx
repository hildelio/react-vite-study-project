import { ComponentProp } from "../types/ComponentProps";
import "../css/Header.css"

function Header({className}: ComponentProp) {
  const firstName = 'Zé';
  const lastName = 'Pequeno';
  return (
    <header className={`header-content ${className}`}>
      <section className="avatar-content">
        <img className="avatar" src="https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671116.jpg?size=626&ext=jpg&ga=GA1.1.1741435561.1709756962&semt=sph" alt="avatar"/>
        <p className="greeting">
          Olá, {`${firstName} ${lastName}`}
        </p>
      </section>
      <h1>Revisando React</h1>
      <img className="logo" src="https://i.imgur.com/rqvLd3q.png" alt="logo"/>      
    </header>
  );
}

export default Header;