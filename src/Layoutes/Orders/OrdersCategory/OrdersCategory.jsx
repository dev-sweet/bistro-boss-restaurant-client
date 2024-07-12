import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useMenu } from "../../../hooks/useMenu";
import OrdersTab from "../OrdersTab/OrdersTab";
import { useState } from "react";

const OrdersCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALADS</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <OrdersTab items={salads} />
        </TabPanel>
        <TabPanel>
          <OrdersTab items={pizzas} />
        </TabPanel>
        <TabPanel>
          <OrdersTab items={soups} />
        </TabPanel>
        <TabPanel>
          <OrdersTab items={desserts} />
        </TabPanel>
        <TabPanel>
          <OrdersTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrdersCategory;
