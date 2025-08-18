import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Order } from './order.entity';
import { ProductVariant } from '../../../store/domain/entities/product-variant';

@Entity('order_items')
export class OrderItem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @ManyToOne(() => Order, (order) => order.items)
    order: Order;

    @Column({type: 'decimal', precision: 10, scale: 2})
    unitPrice: number;

    @ManyToOne(() => ProductVariant, (productVariant) => productVariant.orderItems)
    productVariant: ProductVariant;
}    
