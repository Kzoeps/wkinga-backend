import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { BeatsModule } from './beats/beats.module';
import { BeatsRepository } from './beats/beats.repository';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BeatsModule,
		TypeOrmModule.forFeature([BeatsRepository]),
		AuthModule
  ],
})
export class AppModule {}
