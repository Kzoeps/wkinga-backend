import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersEntity } from './orders.entity';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {

	constructor(private ordersService: OrdersService) {
	}

	@Get()
	getOrders(): Promise<OrdersEntity[]> {
		return this.ordersService.getOrders();
	}

	@Post()
	createOrder(@Body() createOrderDto: CreateOrderDto): Promise<OrdersEntity> {
		return this.ordersService.createOrder(createOrderDto);
	}

}
