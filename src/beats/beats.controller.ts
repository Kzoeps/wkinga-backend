import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { BeatsService } from './beats.service';

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
	createSong(): void{
		console.log("Create Song here");
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
