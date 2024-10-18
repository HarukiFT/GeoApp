import GeoService from "./common/services/geo";

const geo = new GeoService();
geo.getGeo("79.137.174.").then(console.log);
