import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBeatDto } from './dto/create-beat.dto';
import { BeatsEntity } from './beats.entity';
import { BeatsRepository } from './beats.repository';

@Injectable()
export class BeatsService {
	constructor(
		@InjectRepository(BeatsRepository)
		private beatsRepository: BeatsRepository,
	) {}
	createBeat(createBeatDto: CreateBeatDto): Promise<BeatsEntity>{
		return this.beatsRepository.createBeat(createBeatDto);
	}
}
