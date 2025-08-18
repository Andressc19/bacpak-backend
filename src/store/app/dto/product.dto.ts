import { Expose, Type } from "class-transformer";

export class ProductVariantDto {
    @Expose()
    color: string;
    @Expose()
    stock: number;
    @Expose()
    imageUrl?: string;
    @Expose()
    price: number;
}

export class ProductResponseDto {
    @Expose()
    id: number;
    @Expose()
    name: string;
    @Expose()
    description: string;
    @Expose()
    imageBaseUrl: string;
    @Expose()
    @Type(() => ProductVariantDto)
    variants?: ProductVariantDto[];
}
