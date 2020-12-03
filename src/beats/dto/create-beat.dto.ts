import { IsNotEmpty } from 'class-validator';

export class CreateBeatDto {
	@IsNotEmpty()
	beatName: string;
	@IsNotEmpty()
	beatProducer: string;
	@IsNotEmpty()
	audioURL: string;
	@IsNotEmpty()
	price: number;
	@IsNotEmpty()
	sold: boolean;
}
