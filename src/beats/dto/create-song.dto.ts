import { IsNotEmpty } from 'class-validator';

export class CreateSongDto {
	@IsNotEmpty()
	beatName: string;
	@IsNotEmpty()
	beatProducer: string;
	@IsNotEmpty()
	audioURL: string;
	@IsNotEmpty()
	price: string;
	@IsNotEmpty()
	sold: string;
}
