import { Column, Entity} from 'typeorm';
import { BeatsEntity } from '../beats/beats.entity';

@Entity()
export class OrdersEntity extends BeatsEntity{
	@Column()
	journalID: string;

	@Column()
	emailID: string;

	@Column()
	chosenLicenseType: string;
}
