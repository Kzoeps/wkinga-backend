import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateBeatDto } from '../../beats/dto/create-beat.dto';

export class CreateOrderDto extends CreateBeatDto{
	@IsNotEmpty()
	@IsNumber()
	journalID: number;

	@IsNotEmpty()
	@IsEmail()
	emailID: string;

	@IsNotEmpty()
	@IsString()
	chosenLicenseType: string
}
