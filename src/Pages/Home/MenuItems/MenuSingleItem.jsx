const MenuSingleItem = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="flex gap-5 justify-between">
      <img
        className="h-[100px] rounded-tl-0 rounded-bl-full rounded-e-full"
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-3xl">{name}</h3>
        <p>{recipe}</p>
      </div>
      <h4 className="text-yellow-400 text-xl font-semibold">{price}</h4>
    </div>
  );
};

export default MenuSingleItem;
