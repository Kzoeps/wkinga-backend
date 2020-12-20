import { EntityRepository, Repository } from 'typeorm';
import { BeatsEntity } from './beats.entity';
import { CreateBeatDto } from './dto/create-beat.dto';
import { Injectable } from '@nestjs/common';
import { UpdateBeatDto } from './dto/update-beat.dto';

@Injectable()
@EntityRepository(BeatsEntity)
export class BeatsRepository extends Repository<BeatsEntity> {
	async createBeat(createBeatDto: CreateBeatDto): Promise<BeatsEntity> {
		let beat = new BeatsEntity();
		beat = this.objectAssigner(createBeatDto, beat);
		await beat.save();
		return beat;
	}

	objectAssigner(beatDTO: CreateBeatDto, beatObj: BeatsEntity): BeatsEntity{
		Object.keys(beatDTO).forEach((eachKey) => {
			beatObj[eachKey] = beatDTO[eachKey];
		})
		return beatObj;
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

	async getAllBeat(): Promise<BeatsEntity[]>{
		const query = this.createQueryBuilder('beats');
		const beats =  await query.getMany();
		return beats;
	}
}
