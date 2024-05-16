// OrderSelect.tsx
import { Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Order as OrderType } from "../types/Orders";

type OrderSelectProps = {
  setSelectedOrder: (order: OrderType | undefined) => void;
};

export const OrderSelect = ({ setSelectedOrder }: OrderSelectProps) => {
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/orders");
        console.log(data);
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    getOrders();
  }, []);

  const handleChange = (value: string) => {
    const order = orders.find((order) => order._id === value);
    setSelectedOrder(order);
  };

  const options = orders.map((order) => ({
    value: order._id,
    label: `Commande n°${order.number}`,
  }));

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h3 style={{ marginRight: '10px' }}>Les Commandes</h3>
        <Select 
          style={{ margin: '5px' }}
          size="large"
          defaultValue="Choisir une commande"
          onChange={handleChange}
          options={options}
        />
      </div>
    </>
  );
};
