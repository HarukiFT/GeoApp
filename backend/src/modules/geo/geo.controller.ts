import { Controller, Get, Ip, Param, Query } from '@nestjs/common';
import { GeoService } from './geo.service';
import { IpDto } from './dto/ip.dto';

@Controller('geo')
export class GeoController {
  constructor(private readonly geoService: GeoService) {}

  @Get()
  getLocation(@Query() dto: IpDto) {
    return this.geoService.getGeo(dto.ip);
  }
}
