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
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { BeatValuesPipe } from './pipes/beat-values-pipe';
import { UpdateBeatDto } from './dto/update-beat.dto';

@Controller('beats')
export class BeatsController {
	constructor(
		private beatsService: BeatsService,
	) {
	}

	@Get()
	getSongs(): void {
		console.log('Get Songs call here');
	}

	@Post()
	@UsePipes(BeatValuesPipe, new ValidationPipe({ transform: true }))
	createSong(
		@Body() createBeatDto: CreateBeatDto,
	): Promise<BeatsEntity> {
		console.log(createBeatDto);
		return this.beatsService.createBeat(createBeatDto);
	}

	@Get(':id')
	getSong(
		@Param('id', ParseIntPipe) id: number
	): Promise<BeatsEntity>{
		return this.beatsService.getBeat(id)
	}

	@Patch(':id')
	@UsePipes(BeatValuesPipe, ValidationPipe)
	updateSong(
		@Body() updateBeatDto: UpdateBeatDto,
	): void {
		this.beatsService.updateBeat(updateBeatDto);
	}

	@Delete(':id')
	deleteSong(): void {
		console.log('delete song here');
	}
}
