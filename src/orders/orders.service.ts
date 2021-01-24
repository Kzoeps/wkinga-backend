import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersRepository } from './orders.repository';
import { OrdersEntity } from './orders.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
	constructor(
		@InjectRepository(OrdersRepository)
		private ordersRepository: OrdersRepository
	) {
	}

	getOrders(): Promise<OrdersEntity[]> {
		return this.ordersRepository.getOrders();
	}

	createOrder(createOrderDto: CreateOrderDto): Promise<OrdersEntity> {
		return this.ordersRepository.createOrder(createOrderDto);
	}
}
