import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrdersTab from "../OrdersTab/OrdersTab";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useMenu } from "../../../hooks/useMenu";
const OrdersCategory = () => {
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const categories = ["salads", "pizza", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  return (
    <div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="text-center py-10">
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
        </div>
        <TabPanel>
          <OrdersTab items={salads} />
        </TabPanel>
        <TabPanel>
          <OrdersTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrdersTab items={soups} />
        </TabPanel>
        <TabPanel>
          <OrdersTab items={drinks} />
        </TabPanel>
        <TabPanel>
          <OrdersTab items={dessert} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrdersCategory;
