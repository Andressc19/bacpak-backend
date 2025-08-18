import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Order } from "../../../orders/domain/entities/order.entity";


@Entity('customers')
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column()
    phone: string;

    @OneToMany(() => Order, (order) => order.customer)
    orders: Order[];
}