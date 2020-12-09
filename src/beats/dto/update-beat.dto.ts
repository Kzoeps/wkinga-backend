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
	price: number;
	@IsOptional()
	@IsBoolean()
	sold: boolean;
}
