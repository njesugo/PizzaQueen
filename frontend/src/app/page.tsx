"use client";

import { Order } from "@/components/Order";
import { OrderSelect } from "@/components/OrderSelect";
import { Order as OrderType } from "../types/Orders";
import { useState } from "react";
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function Home() {

  const [selectedOrder, setSelectedOrder] = useState<OrderType | undefined>();

  return (
    <>
      <div className="App">
        <Button type="primary" size="large" icon={<PlusOutlined />}>
          Commande
        </Button>
      </div>
              
      <div>
        <OrderSelect setSelectedOrder={setSelectedOrder} />
        {selectedOrder && <Order order={selectedOrder} />}
      </div>
    </>
  );
}