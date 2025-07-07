import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappButton.css";

const WhatsappButton = () => (
  <a
    href="https://wa.me/5531988830778" 
    className="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco pelo WhatsApp"
  >
    <FaWhatsapp size={36} />
  </a>
);

export default WhatsappButton;