import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { PaymentsModule } from './payments/payments.module';
import { OrdersModule } from './orders/orders.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { StoreModule } from './store/store.module';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './store/domain/entities/product.entity';
import { ProductVariant } from './store/domain/entities/product-variant';
import { OrderItem } from './orders/domain/entities/order-item';
import { Order } from './orders/domain/entities/order.entity';
import { Customer } from './customers/domain/entities/customer.entity';
import { Payment } from './payments/domain/entities/payment.entity';
import { Delivery } from './deliveries/domain/entities/delivery.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.POSTGRES_URL,
      synchronize: false,
      logging: true,
      entities: [Product, ProductVariant, OrderItem, Order, Customer, Payment, Delivery],
      migrations: [],
      subscribers: [],
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    CustomersModule,
    PaymentsModule,
    OrdersModule,
    DeliveriesModule,
    StoreModule,
    SharedModule
  ],
})
export class AppModule { }
