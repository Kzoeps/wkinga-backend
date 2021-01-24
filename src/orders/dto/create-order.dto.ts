import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateBeatDto } from '../../beats/dto/create-beat.dto';

export class CreateOrderDto extends CreateBeatDto{
	@IsNotEmpty()
	// @IsNumber()
	journalID: string;

	@IsNotEmpty()
	@IsString()
	chosenLicenseType: string
}
