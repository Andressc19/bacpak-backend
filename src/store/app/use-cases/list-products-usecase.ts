import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { ProductService } from "src/store/domain/services/product.service";
import { ProductResponseDto } from "../dto/product.dto";
import { Result, success, error } from "src/shared/result.type";

@Injectable()
export class ListProductsUseCase {
    constructor(private productService: ProductService) {}


    async execute(): Promise<Result<ProductResponseDto[]>> {
        const products = await this.productService.getAll();

        if (!products || products.length === 0) {
            return error('Products not found');
        }

        const dto = plainToInstance(ProductResponseDto, products, {
            enableImplicitConversion: true
        });

        return success(dto);
    }
}