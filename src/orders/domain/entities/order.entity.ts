import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, Index } from "typeorm";

import { Customer } from "src/customers/domain/entities/customer.entity";
import { OrderStatus } from "src/shared/domain/OrderStatus.enum";
import { OrderItem } from "./order-item";
import { Delivery } from "src/deliveries/domain/entities/delivery.entity";
import { Payment } from "src/payments/domain/entities/payment.entity";


@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    orderDate: Date;

    @Column({type: 'decimal', precision: 10, scale: 2})
    totalAmount: number;

    @Column({ type: 'enum', enum: OrderStatus })
    @Index()
    status: OrderStatus;
    
    @ManyToOne(() => Customer, (customer) => customer.orders, { nullable: false })
    customer: Customer;

    @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { cascade: true})
    items: OrderItem[];

    @OneToOne(() => Delivery, (delivery) => delivery.order, { nullable: false })
    delivery: Delivery;

    @OneToOne(() => Payment, (payment) => payment.order, { nullable: false })
    payment: Payment;
}