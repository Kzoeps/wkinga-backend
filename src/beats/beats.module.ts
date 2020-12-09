import { Module } from '@nestjs/common';
import { BeatsController } from './beats.controller';
import { BeatsService } from './beats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeatsRepository } from './beats.repository';

@Module({
	imports: [
		TypeOrmModule.forFeature([BeatsRepository])
	],
	controllers: [BeatsController],
	providers: [BeatsService]
})
export class BeatsModule {}
