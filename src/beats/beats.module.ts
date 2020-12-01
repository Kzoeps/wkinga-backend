import { Module } from '@nestjs/common';
import { BeatsController } from './beats.controller';
import { BeatsService } from './beats.service';

@Module({
	controllers: [BeatsController],
	providers: [BeatsService]
})
export class BeatsModule {}
