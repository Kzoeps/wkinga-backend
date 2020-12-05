import { BadRequestException, PipeTransform } from '@nestjs/common';
import { CreateBeatDto } from '../dto/create-beat.dto';

export class BeatValuesPipe implements PipeTransform {
	transform(createBeatDto: CreateBeatDto) {
		let price = createBeatDto.price;
		let sold = createBeatDto.sold;
		if (price && sold) {
			try {
				price = parseInt(String(price))
				sold = String(sold) === 'true';
				createBeatDto.price = price;
				createBeatDto.sold = sold;
				return createBeatDto;
			} catch (e) {
				throw new BadRequestException('Bad Request, either price is not an integer or sold is not a bool.')
			}
		}
	}
}
