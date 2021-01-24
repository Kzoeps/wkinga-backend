import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { BeatsController } from './beats/beats.controller';
import { BeatsService } from './beats/beats.service';
import { BeatsModule } from './beats/beats.module';
import { BeatsRepository } from './beats/beats.repository';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';
import { OrdersService } from './orders/orders.service';
import { OrdersRepository } from './orders/orders.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BeatsModule,
		TypeOrmModule.forFeature([BeatsRepository, OrdersRepository]),
		OrdersModule
  ],
  controllers: [BeatsController, OrdersController],
  providers: [BeatsService, OrdersService],
})
export class AppModule {}
