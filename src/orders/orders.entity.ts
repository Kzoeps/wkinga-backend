import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BeatsEntity } from '../beats/beats.entity';

@Entity()
export class OrdersEntity extends BeatsEntity{


}
