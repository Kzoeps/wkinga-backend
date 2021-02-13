import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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
	@UsePipes(new ValidationPipe({ transformOptions: { enableImplicitConversion: true}}))
	createOrder(@Body() createOrderDto: CreateOrderDto): Promise<OrdersEntity> {
		return this.ordersService.createOrder(createOrderDto);
	}

	@Delete(':id')
	deleteOrder(@Param('id', ParseIntPipe)id: number): Promise<void> {
		return this.ordersService.deleteOrder(id);
	}

}
