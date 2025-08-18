import { TOKENS } from "src/config/tokens";
import { Product } from "../entities/product.entity";
import type { IProductRepository } from "../repositories/product.repository";
import { Injectable, Inject } from "@nestjs/common";


@Injectable() 
export class ProductService {
    constructor(@Inject(TOKENS.PRODUCT_REPOSITORY)private productRepository: IProductRepository) {}

    async getAll(): Promise<Product[]> {
        return this.productRepository.getAll();
    }
}
