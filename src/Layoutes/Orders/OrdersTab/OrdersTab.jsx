import FoodCard from "../../../Pages/Shared/FoodCard/FoodCard";

const OrdersTab = ({ items }) => {
  console.log(items);
  return (
    <div className="md:grid md:grid-cols-3 gap-10">
      {items?.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrdersTab;
