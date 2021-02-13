import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersRepository } from './orders.repository';

@Module({
	imports: [
		TypeOrmModule.forFeature([OrdersRepository]),
	],
	controllers: [OrdersController],
	providers: [OrdersService]
})
export class OrdersModule {}
