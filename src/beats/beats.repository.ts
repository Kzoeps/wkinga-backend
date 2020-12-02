import { EntityRepository, Repository } from 'typeorm';
import { BeatsEntity } from './beats.entity';
import { CreateBeatDto } from './dto/create-beat.dto';

@EntityRepository(BeatsEntity)
export class BeatsRepository extends Repository<BeatsEntity> {
	async createBeat(createBeatDto: CreateBeatDto): Promise<BeatsEntity>{
		const {beatName, beatProducer, audioURL, price, sold} = createBeatDto;
		const beat = new BeatsEntity()
		beat.beatName = beatName;
		beat.beatProducer = beatProducer;
		beat.audioURL = audioURL;
		beat.price = price;
		beat.sold = sold;
		await beat.save()
		return beat
	}
}
