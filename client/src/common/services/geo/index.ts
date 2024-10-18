import axios, { AxiosInstance } from "axios";
import { apiConfig } from "./config";
import { geo } from "./config/api";
import { Geo } from "./types/geo.type";
import {
  ConnectionError,
  IncorrectIp,
  InternalError,
  NotFoundGeo,
} from "./errors";

export default class GeoService {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: `${apiConfig.baseURL}${apiConfig.geo.sub}`,
    });

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (!error.response) throw ConnectionError;
        switch (error.response.status) {
          case 400:
            throw IncorrectIp;
          case 404:
            throw NotFoundGeo;
          case 500:
            throw InternalError;
        }
      }
    );
  }

  async getGeo(ip: string) {
    return this.axiosInstance
      .get(`${geo.get}?ip=${ip}`)
      .then((response) => response.data as Geo);
  }
}
