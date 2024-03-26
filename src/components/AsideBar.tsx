import { ComponentProp } from "../types/ComponentProps";

function AsideBar({className}: ComponentProp) {
  return (
    <aside className={`aside-bar-content ${className}`}>
      <h1>Home</h1>
      <h1>Acompanhamentos</h1>
      <h1>Avaliações</h1>
      <h1>Serviços</h1>
      <h1>Imagens</h1>
    </aside>
  );
}

export default AsideBar;