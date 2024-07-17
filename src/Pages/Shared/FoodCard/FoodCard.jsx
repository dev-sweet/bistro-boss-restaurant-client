const FoodCard = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <div className="px-5">
      <div className="card card-compact bg-gray-100 rounded-none">
        <figure>
          <img className="w-full" src={image} alt={name} />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-3xl text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="text-center mt-4">
            <button className="btn bg-gray-200 text-[#BB8506] hover:bg-gray-800 mb-5">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
