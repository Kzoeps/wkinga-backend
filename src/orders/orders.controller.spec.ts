import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrdersEntity } from './orders.entity';

describe('OrdersController', () => {
  let ordersController: OrdersController;
  let ordersService: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
			providers: [OrdersService]
    }).compile();

    ordersController = module.get<OrdersController>(OrdersController);
    ordersService = module.get<OrdersService>(OrdersService);
  });

  describe('getOrders', () => {
  	it('should return an array of all orders', async () => {
  		const result: OrdersEntity = {
  			beatName: 'hello',
				beatProducer: 'wkinga',
				audioURL: '/asdf/asdf',
				premiumLeasePrice: 23,
				trackoutLeasePrice: 33,
				unlimitedLeasePrice: 44,
				exclusivePrice: 55,
				sold: false,
				journalID: 213123,
				chosenLicenseType: 'exclusive'
			} as OrdersEntity;
  		jest.spyOn(ordersService, 'getOrders').mockImplementation(async () => [result]);
  		expect(await ordersController.getOrders()).toBe(result);
		})
	})
});
