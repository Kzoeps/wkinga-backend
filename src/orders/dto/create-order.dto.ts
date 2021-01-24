import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateBeatDto } from '../../beats/dto/create-beat.dto';

export class CreateOrderDto extends CreateBeatDto{
	@IsNotEmpty()
	@IsNumber()
	journalID: number;

	@IsNotEmpty()
	@IsString()
	chosenLicenseType: string
}
