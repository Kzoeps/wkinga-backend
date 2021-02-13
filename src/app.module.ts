import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { BeatsModule } from './beats/beats.module';
import { BeatsRepository } from './beats/beats.repository';
import { AuthModule } from './auth/auth.module';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';
import { OrdersService } from './orders/orders.service';
import { OrdersRepository } from './orders/orders.repository';
import { BeatsController } from './beats/beats.controller';
import { BeatsService } from './beats/beats.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BeatsModule,
		TypeOrmModule.forFeature([BeatsRepository, OrdersRepository]),
    OrdersModule,
    AuthModule
  ],
  controllers: [BeatsController, OrdersController],
  providers: [BeatsService, OrdersService],
})
export class AppModule {}
