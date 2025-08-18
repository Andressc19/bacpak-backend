import { Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Order } from "src/orders/domain/entities/order.entity";


@Entity('payments')
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: ['pending', 'success', 'failed', 'cancelled'] })
    status: string;

    @Column()
    transactionReference: string;

    @Column('decimal', { precision: 10, scale: 2 })
    amount: number;

    @Column()
    paymentMethod: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => Payment, (payment) => payment.order)
    order: Order;
}
