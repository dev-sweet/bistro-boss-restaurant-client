import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useMenu } from "../../../hooks/useMenu";
import OrdersTab from "../OrdersTab/OrdersTab";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const OrdersCategory = () => {
  const [items, setItems] = useState([]);
  const categories = ["salads", "pizza", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const salads = items.filter((item) => item.category === category);
  console.log("salads", salads);
  console.log("category", category, items[2].category);
  useEffect(() => {
    fetch(`http://localhost:5000/menu`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [category, tabIndex]);

  return (
    <div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="text-center py-10">
          <TabList>
            {categories.map((category, index) => (
              <Tab key={index}>
                <Link
                  className="uppercase font-semibold"
                  to={`/orders/${category}`}
                >
                  {category}
                </Link>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* {categories.map((category, index) => ( */}
        <TabPanel>
          <OrdersTab items={items} />
        </TabPanel>
        <TabPanel>
          <OrdersTab items={items} />
        </TabPanel>
        <TabPanel>
          <OrdersTab items={items} />
        </TabPanel>
        <TabPanel>
          <OrdersTab items={items} />
        </TabPanel>
        {/* ))} */}
      </Tabs>
    </div>
  );
};

export default OrdersCategory;
