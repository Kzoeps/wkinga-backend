import { OrdersEntity } from '../orders/orders.entity';
import { BeatsEntity } from '../beats/beats.entity';
import { CreateOrderDto } from '../orders/dto/create-order.dto';
import { CreateBeatDto } from '../beats/dto/create-beat.dto';
import { UpdateBeatDto } from '../beats/dto/update-beat.dto';

export const objectAssigner = (theDTO: CreateOrderDto| UpdateBeatDto | CreateBeatDto, theEntity: OrdersEntity | BeatsEntity): OrdersEntity | BeatsEntity => {
	Object.keys(theDTO).forEach((eachKey) => {
		if (eachKey === 'sold') {
			theEntity[eachKey] = theDTO[eachKey].toString() === 'true';
		} else {
			theEntity[eachKey] = theDTO[eachKey];
		}
	})
	return theEntity;
}
