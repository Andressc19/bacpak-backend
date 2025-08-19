import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ProductVariant } from "./product-variant";


@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    shortDescription: string;

    @Column()
    imageBaseUrl: string;

    @OneToMany(() => ProductVariant, (productVariant) => productVariant.product)
    variants: ProductVariant[];
}
