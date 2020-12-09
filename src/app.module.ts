import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { BeatsController } from './beats/beats.controller';
import { BeatsService } from './beats/beats.service';
import { BeatsModule } from './beats/beats.module';
import { BeatsRepository } from './beats/beats.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BeatsModule,
		TypeOrmModule.forFeature([BeatsRepository])
  ],
  controllers: [BeatsController],
  providers: [BeatsService],
})
export class AppModule {}
