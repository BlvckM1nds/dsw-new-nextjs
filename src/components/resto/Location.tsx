import { FaInstagram, FaLocationDot, FaWhatsapp } from "react-icons/fa6";

import Container from "../common/Container";
import Wrapper from "../common/Wrapper";

export default function Location() {
  return (
    <Wrapper id="location" className="py-20 lg:py-28">
      <Container className="space-y-12 md:space-y-16">
        <h2 className="font-rabona font-bold text-accent text-4xl lg:text-5xl text-center">Alamat Resto</h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:basis-2/5 space-y-6">
            {/* Loc & Contact */}
            <div>
              <h4 className="text-center lg:text-left text-2xl text-primary font-semibold mb-3">Temukan kami di</h4>
              <ul className="flex flex-col gap-2.5 text-primary/75">
                <li className="flex items-center gap-2.5">
                  <FaLocationDot className="text-2xl" />
                  Sunter Jaya, Jakarta Utara, DKI Jakarta
                </li>
                <li className="flex items-center gap-2.5">
                  <FaWhatsapp className="text-2xl" />
                  0878 8326 2600
                </li>
                <li className="flex items-center gap-2.5">
                  <FaInstagram className="text-2xl" />
                  @dapoersariwangi_
                </li>
              </ul>
            </div>

            {/* Jam Buka */}
            <div>
              <h4 className="text-center lg:text-left text-2xl text-primary font-semibold mb-3">Jam operasional</h4>
              <ul className="lg:w-2/3 flex flex-col gap-2.5 text-primary/75">
                <li className="flex items-center justify-between gap-2.5">
                  <span>Senin - Jumat</span>
                  <span>10:00 - 22:00</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span>Sabtu</span>
                  <span>09:00 - 23:00</span>
                </li>
                <li className="flex items-center justify-between gap-2.5">
                  <span>Minggu</span>
                  <span>Tutup</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:basis-3/5">
            <iframe
              title="Dapoer Sariwangi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.853416475075!2d106.87768621128978!3d-6.150379560262374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f56d47f94cc7%3A0x244fce798572aea5!2sDapoer%20Sariwangi!5e0!3m2!1sen!2sid!4v1720546296955!5m2!1sen!2sid"
              className="shadow-md rounded-xl w-full"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};