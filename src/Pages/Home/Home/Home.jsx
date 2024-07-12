import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Contact from "../Contact/Contact";
import Feutured from "../Feutured/Feutured";
import MenuItems from "../MenuItems/MenuItems";
import RecommendsItems from "../RecommendsItems/RecommendsItems";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant | Home</title>
      </Helmet>
      <Banner />
      <Categories />
      <About />
      <MenuItems />
      <Contact />
      <RecommendsItems />
      <Feutured />
      <Testimonials />
    </div>
  );
};

export default Home;
