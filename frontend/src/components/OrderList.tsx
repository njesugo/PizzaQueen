import axios from "axios";
import { useEffect, useState } from "react";
import { Order } from "./Order";
import { Order as OrderType } from "../types/Orders"
import { OrderOne } from "./OrderOne";
import { Filter } from "./Filter";
import { message } from "antd";


export const OrderList = () => {

    const [orders, setOrders] = useState<OrderType[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/orders`);
                setOrders(data);
            } catch (error) {
                message.error("Failed to fetch orders");
                console.log("Error fetching Orders : ", error);
            }
        };
        fetchOrders();
    }, []);

    const deleteOrder = async (id: string) => {
        axios.delete(`http://localhost:5000/orders/${id}`);
        setOrders(orders.filter((order) => order._id !== id));
    }

    const editOrder = async (data: Partial<OrderType>) => {
        try {
            await axios.put(`http://localhost:5000/orders/${data._id}`, data);
            const response = await axios.get(`http://localhost:5000/orders`);
            const updatedOrders = response.data;
            setOrders(updatedOrders);
        } catch (error) {
            message.error('Failed to update order.');
            console.error('Error updating order:', error);
        }
    }

    return (
        <>
            <Filter />
            {orders.length > 0 ? (
                orders.map((order) => (
                    <OrderOne 
                        key={order._id}
                        order={order}
                        onEdit={editOrder}
                        onDelete={deleteOrder}
                    />
                ))
            ) : (
                <div>Aucune Commande</div>
            )}
        </>
    );
}