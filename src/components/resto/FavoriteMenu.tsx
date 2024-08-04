"use server";

import Container from "../common/Container";
import Wrapper from "../common/Wrapper";
import MenuCarousel from "./MenuCarousel";

export default async function FavoriteMenu() {
  return (
    <Wrapper id="favorite" className="bg-light pb-20 lg:pb-28">
      <Container className="space-y-12 md:space-y-16 text-center">
        {/* Heading */}
        <div className="heading">
          <h2 className="font-rabona font-bold tracking-wide text-4xl lg:text-5xl text-accent">Menu Favorit</h2>
          <p className="text-primary/60 lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        {/* Favorite Menus */}
        <MenuCarousel />
      </Container>
    </Wrapper>
  );
};