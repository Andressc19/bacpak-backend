import { Injectable } from "@nestjs/common";
import { Product } from "src/store/domain/entities/product.entity";
import { IProductRepository } from "src/store/domain/repositories/product.repository";
import { DataSource, Repository } from "typeorm";


@Injectable()
export class ProductRepository extends Repository<Product> implements IProductRepository {
 
    constructor(private dataSource: DataSource) {
        super(Product, dataSource.createEntityManager())
    }

    getAll(): Promise<Product[]> {
        return this.find({
            relations: ['variants']
        });
    }

    findByName(name: string): Promise<Product | null> {
        return this.findOne({ where: { name } });
    }
}