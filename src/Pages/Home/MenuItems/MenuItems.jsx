import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuSingleItem from "./MenuSingleItem";
import { useMenu } from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const MenuItems = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="px-20 py-10">
      <SectionTitle title="FROM OUR MENU" subtitle="Check it out" />
      <div className="md:grid grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuSingleItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-5">
        <Link
          to="/menu"
          className="btn btn-lg btn-outline border-0 border-b-2 uppercase"
        >
          View Full Menu
        </Link>
      </div>
    </section>
  );
};

export default MenuItems;
