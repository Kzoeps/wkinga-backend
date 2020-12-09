import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BeatsEntity extends BaseEntity{
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	beatName: string;

	@Column()
	beatProducer: string;

	@Column()
	audioURL: string;

	@Column()
	price: number;

	@Column()
	sold: boolean;
}
