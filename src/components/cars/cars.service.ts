import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/car';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepopsitory: Repository<Car>) {}

  public async getAllCars(): Promise<Car[]> {
    return await this.carRepopsitory.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async addCar(newCarData: NewCarInput): Promise<Car> {
    const newCar = this.carRepopsitory.create(newCarData);
    await this.carRepopsitory.save(newCar).catch((err) => {
      new InternalServerErrorException();
    });

    return newCar;
  }
}
