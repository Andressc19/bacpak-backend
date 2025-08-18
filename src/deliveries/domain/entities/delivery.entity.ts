import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Order } from "src/orders/domain/entities/order.entity";


@Entity('deliveries')
export class Delivery {
 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column()
    status: string;

    @Column()
    deliveryDate: Date;

    @ManyToOne(() => Order, (order) => order.delivery)
    order: Order;
}