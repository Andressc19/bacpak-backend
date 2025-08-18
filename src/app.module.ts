import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { PaymentsModule } from './payments/payments.module';
import { OrdersModule } from './orders/orders.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [CustomersModule, PaymentsModule, OrdersModule, DeliveriesModule, StoreModule],
})
export class AppModule {}
