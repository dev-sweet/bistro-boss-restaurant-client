import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Item from "./Item";

const RecommendsItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("./menu.json")
      .then((res) => res.json())
      .then((data) => {
        const items = data.slice(0, 6);
        setItems(items);
      });
  }, []);

  return (
    <section className="py-10">
      <SectionTitle title="Chef Recommends" subtitle="Should try" />
      <div className="md:grid md:grid-cols-3 gap-10">
        {items?.map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default RecommendsItems;
