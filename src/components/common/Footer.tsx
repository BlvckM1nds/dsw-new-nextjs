import Link from "next/link";
import { FaClock, FaInstagram, FaMapPin, FaWhatsapp } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";

import { Hyperlink, SocialMedia } from "@/lib/types";
import logoDapoerSariwangi from "../../assets/logo-dsw.png";

const socialMedia: SocialMedia[] = [
  {
    id: "ig",
    icon: <FaInstagram />,
    path: "https://www.instagram.com/dapoersariwangi_/"
  },
  {
    id: "wa",
    icon: <FaWhatsapp />,
    path: "https://api.whatsapp.com/message/XJ76OO2DV4VEF1?autoload=1&app_absent=0"
  },
  {
    id: "menu",
    icon: <MdMenuBook />,
    path: "https://drive.google.com/drive/folders/10t_qOvcawHWX9kJNrdkXy4Ep-PdBIox4"
  }
];

const links: Hyperlink[] = [
  { id: "home", path: "/" },
  { id: "resto", path: "/resto" },
  { id: "catering", path: "/catering" },
  { id: "about", path: "/about" },
  { id: "contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="pt-12 pb-8 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="footer-content flex flex-col gap-y-6 px-4 lg:gap-0 lg:flex-row lg:items-start lg:justify-between">
          <aside className="company-info flex items-center">
            <figure className="dsw-logo hidden lg:block pr-7 mr-7 border-r border-accent">
              <img
                src={logoDapoerSariwangi.src}
                alt="Dapoer Sariwangi"
                className="w-28"
              />
            </figure>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-primary">PT Dapoer Sariwangi</h3>
              <div className="socials flex gap-2">
                {socialMedia.map((social: SocialMedia) => (
                  <a key={social.id} href={social.path} target="_blank" rel="noopener noreferrer" className={`w-8 aspect-square rounded-full border border-accent text-accent flex justify-center items-center duration-200 hover:bg-accent hover:text-white text-lg`}>{social.icon}</a>
                ))}
              </div>
            </div>
          </aside>
          <nav aria-label="footer-content" className="space-y-2">
            <h3 className="font-semibold text-lg text-primary">Navigasi</h3>
            <ul className="text-primary/75 text-sm space-y-2">
              {links.map(({ id, path }: Hyperlink) => (
                <li key={id} className="capitalize hover:underline">
                  <Link href={path}>{id}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="footer-content" className="space-y-2">
            <h3 className="font-semibold text-lg text-primary">Lorem Ipsum</h3>
            <ul className="text-primary/75 text-sm space-y-2">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </nav>
          <div aria-label="footer-content" className="space-y-2">
            <h3 className="font-semibold text-lg text-primary">Kunjungi Kami</h3>
            <ul className="text-primary/75 text-sm space-y-2">
              <li className="flex items-center gap-1.5"><FaClock />Senin - Minggu (10.00 - 22.00)</li>
              <li className="flex items-center gap-1.5"><FaWhatsapp />0878 8326 2600</li>
              <li className="flex items-center gap-1.5"><FaMapPin />Sunter, Tanjung Priok, Jakarta Utara</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-primary text-center text-xs lg:text-base">Copyright &copy; {new Date().getFullYear()} <strong>PT DAPOER SARIWANGI</strong>. All rights reserved.</p>
      </div>
    </footer>
  );
};