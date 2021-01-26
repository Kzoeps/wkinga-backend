import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { OrdersEntity } from './orders.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { objectAssigner } from '../shared/helpers';

@Injectable()
@EntityRepository(OrdersEntity)
export class OrdersRepository extends Repository<OrdersEntity> {
	async getOrders(): Promise<OrdersEntity[]> {
		const ordersQuery = this.createQueryBuilder('orders');
		return await ordersQuery.getMany();
	}

	async createOrder(createOrderDto: CreateOrderDto): Promise<OrdersEntity> {
		const order = new OrdersEntity();
		objectAssigner(createOrderDto, order);
		return await order.save();
	}

	async deleteOrder(id: number): Promise<void> {
		const orders = await this.delete(id);
		if (orders.affected === 0) {
			throw new NotFoundException(`the beat of id: ${id} was not found`);
		}
	}
}
