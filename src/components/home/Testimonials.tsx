import Wrapper from "../common/Wrapper";
import Container from "../common/Container";
import TestimonialCarousel from "./TestimonialCarousel";
import sampleImage from "../../assets/vegetables.jpg";

export default function Testimonials() {
  return (
    <Wrapper id="home-testimonials" className="bg-cover bg-center py-20 lg:py-28" style={{ backgroundImage: `url(${sampleImage.src})` }}>
      <Container className="space-y-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-rabona font-bold tracking-wide text-white text-4xl lg:text-5xl">Kata Mereka</h2>
          <p className="text-white lg:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/* Review Cards */}
        <TestimonialCarousel />
      </Container>
    </Wrapper>
  );
};