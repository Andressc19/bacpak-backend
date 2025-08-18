import { Module } from "@nestjs/common";
import { ProductController } from "./infra/http/product.controller";
import { ListProductsUseCase } from "./app/use-cases/list-products-usecase";
import { ProductService } from "./domain/services/product.service";
import { ProductRepository } from "./infra/db/product.repository";
import { IProductRepository } from "./domain/repositories/product.repository";
import { TOKENS } from "../config/tokens";

@Module({
    imports: [],
    controllers: [ProductController],
    providers: [
        ListProductsUseCase, 
        ProductService,
        { provide: TOKENS.PRODUCT_REPOSITORY, useClass: ProductRepository }
    ],
})
export class StoreModule {}