import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { BeatsService } from './beats.service';
import { CreateBeatDto } from './dto/create-beat.dto';
import { BeatsEntity } from './beats.entity';
import { UpdateBeatDto } from './dto/update-beat.dto';

@Controller('beats')
export class BeatsController {
	constructor(
		private beatsService: BeatsService,
	) {
	}

	@Get()
	getSongs(): Promise<BeatsEntity[]> {
		return this.beatsService.getAllBeats();
	}

	@Post()
	@UsePipes(new ValidationPipe({ transformOptions: { enableImplicitConversion: true } }))
	createSong(
		@Body() createBeatDto: CreateBeatDto,
	): Promise<BeatsEntity> {
		console.log(createBeatDto);
		return this.beatsService.createBeat(createBeatDto);
	}

	@Get(':id')
	getSong(
		@Param('id', ParseIntPipe) id: number,
	): Promise<BeatsEntity> {
		return this.beatsService.getBeat(id);
	}

	@Patch(':id')
	@UsePipes(new ValidationPipe({ transformOptions: { enableImplicitConversion: true } }))
	updateBeat(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateBeatDto: UpdateBeatDto,
	): Promise<BeatsEntity> {
		return this.beatsService.updateBeat(id, updateBeatDto);
	}

	@Delete(':id')
	deleteSong(@Param('id', ParseIntPipe) id: number): Promise<void> {
		return this.beatsService.deleteSong(id);
	}
}
