import { IsBoolean, IsInt, IsNotEmpty } from 'class-validator';

export class CreateBeatDto {
	@IsNotEmpty()
	beatName: string;

	@IsNotEmpty()
	beatProducer: string;

	@IsNotEmpty()
	audioURL: string;

	@IsNotEmpty()
	@IsInt()
	price: number;
	
	@IsNotEmpty()
	@IsBoolean()
	sold: boolean;
}
