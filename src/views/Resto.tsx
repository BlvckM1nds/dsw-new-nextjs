import Layout from "@/components/common/Layout";
import Wrapper from "@/components/common/Wrapper";
import Hero from "@/components/resto/Hero";
import FavoriteMenu from "@/components/resto/FavoriteMenu";
import Categories from "@/components/resto/Categories";
import Promotions from "@/components/resto/Promotions";
import Rooms from "@/components/resto/Rooms";
import Location from "@/components/resto/Location";

export default function RestoPage() {
  return (
    <Wrapper id="resto">
      <Layout>
        <Hero />
        <FavoriteMenu />
        <Categories />
        <Promotions />
        <Rooms />
        <Location />
      </Layout>
    </Wrapper>
  );
};