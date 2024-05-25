
import { Button } from "antd";
import { EditFilled, CloseOutlined } from "@ant-design/icons";
import { Order as OrderType } from "../types/Orders";
import { useState } from "react";

type OrderProps = {
    order: OrderType;
    onEdit: (data: Partial<OrderType>) => void;
    onDelete: (id: string) => void;
}

export const OrderOne = ({order, onEdit, onDelete}: OrderProps) => {

    const [editing, setEditing] = useState<boolean>(false);
    const [number, setNumber] = useState<number>(order.number);
    const [name, setName] = useState<string>(order.client.name); 
    const [firstname, setFirstname] = useState<string>(order.client.firstname); 
    const [date, setDate] = useState<Date>(order.date);


    return (
        <div className="px-3 pb-6 border-b border-slate-300 my-8 flex justify-between gap-5 items-start">
                <div>
                    <div className="flex items-center gap-10">
                        <h2 className="font-bold text-[20px]">Commande {order.number} <span className="font-medium text-description"> - {order.status}</span></h2>
                        {/* <div>
                            <Button
                                type="primary"
                                className="custom-button-light"
                            >
                                3
                            </Button>
                        </div> */}
                    </div>
                    <div className="text-description font-bold">Par {order.client.firstname} {order.client.name}</div>
                    <div className="text-description" >{order.date}</div>
                    {order.items.map((item, index) => (
                            <div className="flex gap-4 items-start">
                                <div className="font-bold">
                                    {"-"}
                                </div>
                                <div>
                                    <div className="flex gap-2">
                                        <div className="text-description font-semibold">{item.name}</div> 
                                        <div className="text-description font-medium">{item.price}€</div>
                                    </div>
                                    <div className="text-description">{item.description}</div>
                                    
                                </div>
                            </div>
                        ))
                    }
                    
                </div>

                <div className="flex gap-3">
                    <Button
                        type="primary"
                        icon={<CloseOutlined />}
                        className="custom-button-light"
                        onClick={() => onDelete(order._id)}
                    >
                    </Button>
                    <Button
                        type="primary"
                        icon={<EditFilled />}
                        className="custom-button-dark"
                    >
                    </Button>

                </div>
            </div>
    );
}