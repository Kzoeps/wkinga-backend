import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateBeatDto {
	@IsNotEmpty()
	@IsString()
	beatName: string;

	@IsNotEmpty()
	@IsString()
	beatProducer: string;

	@IsNotEmpty()
	@IsString()
	audioURL: string;

	@IsNotEmpty()
	@IsString()
	imgURL: string;

	@IsNotEmpty()
	@IsInt()
	premiumLeasePrice: number;

	@IsNotEmpty()
	@IsInt()
	trackoutLeasePrice: number;

	@IsNotEmpty()
	@IsInt()
	unlimitedLeasePrice: number;

	@IsNotEmpty()
	@IsInt()
	exclusivePrice: number;

	@IsNotEmpty()
	@IsBoolean()
	sold: boolean;
}
