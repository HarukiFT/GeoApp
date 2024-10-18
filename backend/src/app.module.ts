import { Module } from '@nestjs/common';
import { GeoService } from './modules/geo/geo.service';
import { GeoController } from './modules/geo/geo.controller';

@Module({
  imports: [],
  providers: [GeoService],
  controllers: [GeoController],
})
export class AppModule {}
