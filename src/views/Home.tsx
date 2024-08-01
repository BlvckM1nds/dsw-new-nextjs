import Wrapper from "@/components/common/Wrapper";
import Layout from "@/components/common/Layout";
import Jumbotron from "@/components/home/Jumbotron";
import Introduction from "@/components/home/Introduction";
import Services from "@/components/home/Services";
import Companies from "@/components/home/Companies";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <Wrapper id="home">
      <Layout>
        <Jumbotron />
        <Introduction />
        <Services />
        <Testimonials />
        <Companies />
      </Layout>
    </Wrapper>
  );
};