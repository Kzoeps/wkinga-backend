import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { OrdersEntity } from './orders.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
@EntityRepository(OrdersEntity)
export class OrdersRepository extends Repository<OrdersEntity> {
	async getOrders(): Promise<OrdersEntity[]> {
		const ordersQuery = this.createQueryBuilder('orders');
		return await ordersQuery.getMany();
	}

	async createOrder(createOrderDto: CreateOrderDto): Promise<OrdersEntity> {
		const order = new OrdersEntity();
		this.objectAssigner(createOrderDto, order);
		return await order.save();
	}

	objectAssigner(orderDTO: CreateOrderDto, orderObj: OrdersEntity): OrdersEntity{
		Object.keys(orderDTO).forEach((eachKey) => {
			if (orderDTO[eachKey]) {
				if (eachKey === 'sold') {
					orderObj[eachKey] = orderDTO[eachKey].toString() === 'true';
				} else {
					orderObj[eachKey] = orderDTO[eachKey];
				}
			}
		})
		return orderObj;
	}

	async deleteOrder(id: number): Promise<void> {
		const orders = await this.delete(id);
		if (orders.affected === 0) {
			throw new NotFoundException(`the beat of id: ${id} was not found`);
		}
	}
}
