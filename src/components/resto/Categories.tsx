import Link from "next/link";
import Wrapper from "../common/Wrapper";
import Container from "../common/Container";
import imgSample from "../../assets/cooks-bw.jpg";

export default function Categories() {
  return (
    <Wrapper id="resto-categories" className="py-16 lg:py-24">
      <Container className="space-y-10 lg:space-y-14">
        <h2 className="font-rabona font-bold tracking-wide text-3xl lg:text-4xl text-accent text-center">Kategori Menu</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((value: number) => (
            <Link key={value} href="/">
              <div
                className="rounded-br-2xl rounded-ss-2xl aspect-[16/9] bg-cover bg-center overflow-hidden flex items-center justify-center duration-300 opacity-75 hover:opacity-100"
                style={{ backgroundImage: `url(${imgSample.src})` }}
              >
                <span className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">Category</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};