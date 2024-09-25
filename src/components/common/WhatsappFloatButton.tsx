import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/button";

export default function WhatsappFloatButton() {
  return (
    <a
      href="https://wa.me/6289523077397?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20menu%20dan%20pemesanan%20di%20Dapoer%20Sariwangi.%20Mohon%20informasinya%20ya.%20Terima%20kasih%21"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        className="fixed z-50 bottom-6 right-6 rounded-full bg-[#25D366] shadow-md"
        size="customWhatsapp"
      >
        <FaWhatsapp className="h-6 w-6 md:h-7 md:w-7 md:mr-2" /><span className="hidden md:inline">Contact Us</span>
      </Button>
    </a>
  );
};