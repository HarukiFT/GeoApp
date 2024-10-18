import { Injectable, NotFoundException } from '@nestjs/common';
import { lookup, pretty } from 'geoip-lite';

@Injectable()
export class GeoService {
  getGeo(ip: string) {
    const locationData = lookup(ip);
    if (!locationData) {
      throw new NotFoundException();
    }

    return {
      lat: locationData.ll[0].toString(),
      lng: locationData.ll[1].toString(),
      country: locationData.country,
      city: locationData.city,
    };
  }
}
