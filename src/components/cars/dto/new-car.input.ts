/* eslint-disable @typescript-eslint/no-unused-vars */
import { InputType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';
import { MaxKey } from 'typeorm';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(1000)
  @Min(10)
  dailyPrice: number;

  @Field((type) => Int)
  @Max(20000)
  @Min(1500)
  monthlyPrice: number;

  @Field()
  mileage: string;

  @Field()
  gas: string;

  @Field()
  gearType: string;

  @Field()
  thumbnailUrl: string;
}
