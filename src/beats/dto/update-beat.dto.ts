import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class UpdateBeatDto {
	@IsOptional()
	beatName: string;

	@IsOptional()
	beatProducer: string;

	@IsOptional()
	audioURL: string;

	@IsOptional()
	@IsInt()
	premiumLeasePrice: number;

	@IsOptional()
	@IsInt()
	trackoutLeasePrice: number;

	@IsOptional()
	@IsInt()
	unlimitedLeasePrice: number;

	@IsOptional()
	@IsInt()
	exclusivePrice: number;

	@IsOptional()
	@IsBoolean()
	sold: boolean;
}
