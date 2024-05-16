import {Order as OrderType} from "../types/Orders"
import { useState } from "react";
import {  Button, InputNumber, Input, InputNumberProps } from "antd"
import { CloseOutlined } from "@ant-design/icons"

type OrderProps = {
    order : OrderType;
}



export const Order = ({order}: OrderProps) =>  {

    const [quantity, setQuantity] = useState<number>(1); // État local pour stocker la quantité

    const onChange: InputNumberProps['onChange'] = (value) => {
        if (typeof value === 'number') {
            setQuantity(value); // Mettre à jour la quantité avec la nouvelle valeur de l'InputNumber
        }
    };

    const total = (quantity * (order?.items[0]?.price || 0)).toFixed(2); // Calcul du total en multipliant la quantité par le prix

    const itemsList = order?.items.map((item, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ fontWeight: "bold", fontSize: "large" }}>{item.name}</p>
                <InputNumber size="large" min={1} max={100000} defaultValue={order?.items[index]?.quantity} onChange={onChange} style={{ marginLeft: '10px', marginRight: "10px" }} />
                <p style={{ padding: "10px", fontWeight: "bold" }}>{(quantity * item.price).toFixed(2)}</p>
                <Button type="primary" danger size="large" icon={<CloseOutlined />} style={{ margin: '10px' }} ></Button>
            </div>
            <p>{item.description}</p>
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
                <p>Réalisée le : {order?.date}</p>
                <p>Statut : {order.status} </p>
                {itemsList}
            </div>

        </>
    )
}