import { Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Order } from "./Order";
import {Order as OrderType} from "../types/Orders";

type OrderSelectProps = {
    // order: OrderType
}

export const OrderSelect = ({} : OrderSelectProps) => {
    
    const [orders, setOrders] = useState<OrderType[]>([]);
    const [selectedOrder, setSelectedOrder] = useState<OrderType>();


    useEffect(()=> {
        const getOrders = async() => {
            const {data} = await axios.get("http://localhost:5000/orders");
            console.log(data);
            setOrders(data);
        }
        getOrders();
    }, [])

    const options = orders?.map((order) => {
        return {
            value: order._id,
            label: `Commande n°${order._id}`
        }
    })

    const handleChange = (value: string) => {
        const order = orders?.find((order) => order._id === value);
        setSelectedOrder(order);
    }

    return (
        <>
            <Select
                defaultValue="Select an order"
                style={{width: 500}}
                onChange={handleChange}
                options={options}
            />
        </>
    )

}