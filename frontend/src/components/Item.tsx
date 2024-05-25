import { useEffect, useState } from "react";
import { Button, InputNumber, Input, InputNumberProps } from "antd"
import { CloseOutlined, PlusOutlined } from "@ant-design/icons"
import { Item } from "@/types/Items";
import { Order } from "@/types/Orders";


export const OrderItem = ({order,item}:{item:Item,order:Order})=>{
    const [quantity, setQuantity] = useState<number>(1);
    const onChange= (e:number,value:string) => {
        // if (typeof value === 'number') {
        //     setQuantity(value); // Mettre à jour la quantité avec la nouvelle valeur de l'InputNumber
        // }
        order?.items.map((item:Item)=>{
            if(item._id===value){
                item.quantity=e;
                setQuantity(state=>state=e);
            }
            return item;
        })
    };

    useEffect(()=>{
        return ()=>{
            setQuantity(state=>state=1);
            order?.items.map(it=>{
                if(it._id==item._id){
                    it.quantity=1;
                }
                return it;
            });
        }
    },[item,order]);
    
    return(
        <>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ fontWeight: "bold", fontSize: "large" }}>{item.name}</p>
                <InputNumber size="large" min={1} max={100000} defaultValue={item.quantity} onChange={(e)=>onChange(e!,item._id)} style={{ marginLeft: '10px', marginRight: "10px" }} />
                <p style={{ padding: "10px", fontWeight: "bold" }}>{(quantity * item.price).toFixed(2)}</p>
                <Button type="primary" danger size="large" icon={<CloseOutlined />} style={{ margin: '10px' }} ></Button>
            </div>
            <p>{item.description}</p>
        </>
    );
}