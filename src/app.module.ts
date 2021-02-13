import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { BeatsModule } from './beats/beats.module';
import { BeatsRepository } from './beats/beats.repository';
<<<<<<< HEAD
import { AuthModule } from './auth/auth.module';
=======
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';
import { OrdersService } from './orders/orders.service';
import { OrdersRepository } from './orders/orders.repository';
>>>>>>> 85d245456d87d9ce3e1d2292d5654b701f075cf1

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BeatsModule,
<<<<<<< HEAD
		TypeOrmModule.forFeature([BeatsRepository]),
		AuthModule
  ],
=======
		TypeOrmModule.forFeature([BeatsRepository, OrdersRepository]),
		OrdersModule
  ],
  controllers: [BeatsController, OrdersController],
  providers: [BeatsService, OrdersService],
>>>>>>> 85d245456d87d9ce3e1d2292d5654b701f075cf1
})
export class AppModule {}
