import Cover from "../Shared/Cover/Cover";
import img from "../../assets/menu/banner3.jpg";
import MenuCategory from "./MenuCategory";
import { useMenu } from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import desertImg from "../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import { Link } from "react-router-dom";
const OurMenu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <>
      <Cover
        img={img}
        title="Our Menu"
        subtitle="would you like to try a dish"
        mt="80"
      />
      <section>
        <SectionTitle title="today's offer" subtitle="Don't miss!" />
        <MenuCategory items={offered} />
        <div className="text-center mb-10">
          <Link
            to="/orders"
            className="btn btn-lg btn-outline border-0 border-b-2 uppercase"
          >
            Order Your favorite food
          </Link>
        </div>
      </section>
      <MenuCategory
        items={desserts}
        img={desertImg}
        title="Deserts"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory
        items={pizzas}
        img={pizzaImg}
        title="Pizza"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory
        items={salads}
        img={saladImg}
        title="Salads"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory
        items={soups}
        img={soupImg}
        title="Soups"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
    </>
  );
};

export default OurMenu;
