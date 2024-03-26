import { ComponentProp } from "../types/ComponentProps";
import "../css/Footer.css"

function Footer({className}: ComponentProp) {
  return (
    <footer className={`footer-content ${className}`}>
      <p className="texto-complementar">lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
      <p className="copyrights">© 2024</p>
    </footer>
  )
}

export default Footer;