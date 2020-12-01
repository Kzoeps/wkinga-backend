import { EntityRepository, Repository } from 'typeorm';
import { BeatsEntity } from './beats.entity';

@EntityRepository(BeatsEntity)
export class BeatsRepository extends Repository<BeatsEntity>{

}
