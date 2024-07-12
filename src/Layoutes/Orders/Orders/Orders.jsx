import Cover from "../../../Pages/Shared/Cover/Cover";
import coverImg from "../../../assets/shop/banner2.jpg";
import OrdersCategory from "../OrdersCategory/OrdersCategory";

const Orders = () => {
  return (
    <>
      <Cover
        img={coverImg}
        title="our shop"
        subtitle="Would you like to try a dish?"
        mt={28}
      />

      <OrdersCategory />
    </>
  );
};

export default Orders;
