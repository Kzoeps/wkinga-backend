import { Body, Controller, Delete, Get, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BeatsService } from './beats.service';
import { CreateBeatDto } from './dto/create-beat.dto';
import { BeatsEntity } from './beats.entity';
import { BeatValuesPipe } from './pipes/beat-values-pipe';

@Controller('beats')
export class BeatsController {
	constructor(
		private beatsService: BeatsService,
	) {
	}

	@Get()
	getSongs(): void {
		console.log("Get Songs call here");
	}

	@Post()
	@UsePipes(BeatValuesPipe,new ValidationPipe({ transform: true}))
	createSong(
		@Body() createBeatDto: CreateBeatDto,
	): Promise<BeatsEntity>{
		console.log(createBeatDto);
		return this.beatsService.createBeat(createBeatDto)
	}

	@Get(':id')
	getSong(): void{
	console.log("Get song according to ID");
	}

	@Patch(':id')
	updateSong(): void {
		console.log("Update song here");
	}

	@Delete(':id')
	deleteSong(): void{
		console.log("delete song here")
	}
}
