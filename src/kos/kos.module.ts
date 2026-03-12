import { Module } from '@nestjs/common';
import { KosService } from './kos.service';
import { KosController } from './kos.controller';

@Module({
  providers: [KosService],
  controllers: [KosController]
})
export class KosModule {}
