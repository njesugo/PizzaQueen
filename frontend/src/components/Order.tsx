import {Order as OrderType} from "../types/Orders"
import { useState } from "react";
import {  Button, InputNumber, Input, InputNumberProps } from "antd"
import { CloseOutlined, PlusOutlined } from "@ant-design/icons"
import { OrderItem } from "./Item";
type OrderProps = {
    order : OrderType;
}

export const Order = ({order}: OrderProps) =>  {

    // const [quantity, setQuantity] = useState<number>(1); // État local pour stocker la quantité
    const [total, setTotal] = useState<number>(1);
    // : InputNumberProps['onChange'] 
    

    // const total = (quantity * (order?.items[0]?.price || 0)).toFixed(2);
    // order.prix_total=0.0;
    // order?.items.forEach(item=>{
    //     order.prix_total+=item.price*item.quantity;
    // })
    
    const itemsList = order?.items.map((item, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
            {/* <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ fontWeight: "bold", fontSize: "large" }}>{item.name}</p>
                <InputNumber size="large" min={1} max={100000} defaultValue={order?.items[index]?.quantity} onChange={(e)=>onChange(e,item._id)} style={{ marginLeft: '10px', marginRight: "10px" }} />
                <p style={{ padding: "10px", fontWeight: "bold" }}>{(quantity * item.price).toFixed(2)}</p>
                <Button type="primary" danger size="large" icon={<CloseOutlined />} style={{ margin: '10px' }} ></Button>
            </div>
            <p>{item.description}</p> */}
            <OrderItem order={order} item={item}/>
        </div>
    ));

    return (
        <>
            <div style={{ display: "flex", alignItems: "center" }} >
                <h3 style={{ marginRight: '10px' }} >Commande N°{order?.number} - {order?.client?.name} {order?.client?.firstname}</h3>
                <Button type="primary" danger size="large" icon={<CloseOutlined />} style={{ margin: '5px' }} >
                    Supprimer Commande
                </Button>
            </div>
            <div>
                <p>Réalisée le : {}</p>
                <p>Statut : {order.status} </p>
                {itemsList}
                <p>Prix Total : {}</p>
                <Button type="primary" size="large" icon={<PlusOutlined />} style={{ margin: '5px' }} >
                    Article
                </Button>
            </div>

        </>
    )
}