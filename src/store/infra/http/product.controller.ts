import { ListProductsUseCase } from "src/store/app/use-cases/list-products-usecase";
import { Controller, Get } from "@nestjs/common"
import { ProductResponseDto } from "src/store/app/dto/product.dto";
import { Result, success, error } from "src/shared/result.type";

@Controller('products')
export class ProductController {

    constructor(private listProductUseCase: ListProductsUseCase) {}

    @Get()
    async listAll(): Promise<Result<ProductResponseDto[]>> {
        return this.listProductUseCase.execute();
    }

}