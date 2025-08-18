import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Product } from "./product.entity";
import { OrderItem } from "../../../orders/domain/entities/order-item";


@Entity('product_variants')
export class ProductVariant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    color: string;

    @Column()
    stock: number;

    @Column({type: 'decimal', precision: 10, scale: 2})
    price: number;    

    @ManyToOne(() => Product, (product) => product.variants)
    product: Product;

    @OneToMany(() => OrderItem, (orderItem) => orderItem.productVariant)
    orderItems: OrderItem[];
}
