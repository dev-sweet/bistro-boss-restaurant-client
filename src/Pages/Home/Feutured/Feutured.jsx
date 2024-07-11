import featured from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";
const Feutured = () => {
  return (
    <section className="featured p-28 text-white">
      <SectionTitle title="From Our Menu" subtitle="Check it out" />
      <div className="flex gap-5 h-full">
        <img className="md:w-1/2" src={featured} alt="" />
        <div className="md:w-1/2">
          <h3 className="text-3xl">
            March 20, 2023 <br />
            WHERE CAN I GET SOME?
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-lg btn-outline border-white text-white mt-5 border-0 border-b-2 uppercase">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feutured;
