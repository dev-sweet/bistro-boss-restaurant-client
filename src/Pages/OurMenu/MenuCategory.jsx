import MenuSingleItem from "../Home/MenuItems/MenuSingleItem";
import Cover from "../Shared/Cover/Cover";

const MenuCategory = ({ items, img, title, subtitle, mt }) => {
  return (
    <>
      {img && title && (
        <Cover img={img} title={title} subtitle={subtitle} mt={mt} />
      )}

      <div className="p-20">
        <div className="md:grid grid-cols-2 gap-10">
          {items?.map((item) => (
            <MenuSingleItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuCategory;
