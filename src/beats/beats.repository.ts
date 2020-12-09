import { EntityRepository, Repository } from 'typeorm';
import { BeatsEntity } from './beats.entity';
import { CreateBeatDto } from './dto/create-beat.dto';
import { Injectable } from '@nestjs/common';
import { UpdateBeatDto } from './dto/update-beat.dto';

@Injectable()
@EntityRepository(BeatsEntity)
export class BeatsRepository extends Repository<BeatsEntity> {
	async createBeat(createBeatDto: CreateBeatDto): Promise<BeatsEntity> {
		const { beatName, beatProducer, audioURL, price, sold } = createBeatDto;
		const beat = new BeatsEntity();
		beat.beatName = beatName;
		beat.beatProducer = beatProducer;
		beat.audioURL = audioURL;
		beat.price = price;
		beat.sold = sold;
		await beat.save();
		return beat;
	}

	async updateBeat(id: number, updateBeatDto: UpdateBeatDto): Promise<BeatsEntity>{
		const beat = await this.findOne(id);
		for (const property in updateBeatDto) {
			if (updateBeatDto[property] !== 'undefined') {
				beat[property] = updateBeatDto[property];
				if (property === 'sold'){
					beat[property] = updateBeatDto[property].toString() === 'true';
				}
					}
		}
		await beat.save();
		return beat;
	}

	async getBeat(id: number): Promise<BeatsEntity> {
		const beat = await this.findOne(id);
		return beat;
	}
}
