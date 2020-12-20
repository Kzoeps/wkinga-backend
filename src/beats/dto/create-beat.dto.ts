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
