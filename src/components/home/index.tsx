import Wrapper from "../common/Wrapper";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Jumbotron from "./Jumbotron";

export default function HomePage() {
  return (
    <Wrapper id="home">
      <Navbar />
      <Jumbotron />
      <Footer />
    </Wrapper>
  );
};