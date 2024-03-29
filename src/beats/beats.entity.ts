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
	imgURL: string;

	@Column()
	trackoutLeasePrice: number;

	@Column()
	premiumLeasePrice: number;

	@Column()
	unlimitedLeasePrice: number;

	@Column()
	exclusivePrice: number;

	@Column()
	beatDuration: number;

	@Column()
	sold: boolean;
}
