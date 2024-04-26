import {Order as OrderType} from "../types/Orders"

type OrderProps = {
    order : OrderType
}

export const Order = ({order}: OrderProps) =>  {
    return (
        <>
            Num de Commande : {order?.number}
            <br />
            Client : {order?.client?.name} {order?.client?.firstname}
        </>
    )
}