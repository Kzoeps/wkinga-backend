import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { BeatsService } from './beats.service';
import { CreateBeatDto } from './dto/create-beat.dto';
import { BeatsEntity } from './beats.entity';

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
	createSong(
		@Body() createBeatDto: CreateBeatDto,
	): Promise<BeatsEntity>{
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
