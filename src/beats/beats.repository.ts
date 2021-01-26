import { EntityRepository, Repository } from 'typeorm';
import { BeatsEntity } from './beats.entity';
import { CreateBeatDto } from './dto/create-beat.dto';
import { Injectable } from '@nestjs/common';
import { UpdateBeatDto } from './dto/update-beat.dto';
import { objectAssigner } from '../shared/helpers';

@Injectable()
@EntityRepository(BeatsEntity)
export class BeatsRepository extends Repository<BeatsEntity> {
	async createBeat(createBeatDto: CreateBeatDto): Promise<BeatsEntity> {
		const beat = new BeatsEntity();
		objectAssigner(createBeatDto, beat);
		await beat.save();
		return beat;
	}

	async updateBeat(id: number, updateBeatDto: UpdateBeatDto): Promise<BeatsEntity>{
		const beat = await this.findOne(id);
		objectAssigner(updateBeatDto, beat);
		await beat.save();
		return beat;
	}

	async getBeat(id: number): Promise<BeatsEntity> {
		const beat = await this.findOne(id);
		return beat;
	}

	async getAllBeat(): Promise<BeatsEntity[]>{
		const query = this.createQueryBuilder('beats');
		const beats =  await query.getMany();
		return beats;
	}
}
